import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import invoice from './assets/invoice.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Invoice() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
      <div style={{ height: '280px', width: '557px' }}>
        <Viewer fileUrl={invoice} />
      </div>
    </Worker>
  );
}

export default Invoice;
