import React from 'react';
import './invoice.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import invoice from './assets/invoice.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function Invoice() {
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
      <div style={{ height: '280px', width: '505px' }}>
        <Download>
          {(RenderDownloadProps) => (
            <Button className="card-invoice-btn ms-auto" onClick={RenderDownloadProps.onClick} icon={<DownloadOutlined />}>
              Unduh
            </Button>
          )}
        </Download>
        <Viewer fileUrl={invoice} plugins={[getFilePluginInstance]} />
      </div>
    </Worker>
  );
}

export default Invoice;
