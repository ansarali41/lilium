import React from 'react';
import submitStyles from '../../styles/Submit.module.css'
const UploadHeader = () => {
    return (
        <div className="col-12 col-md-2">
          <ul className={submitStyles.list}>
            <li className={submitStyles.listLinks}>Create collection</li>
            <li className={submitStyles.listLinks}>Upload files</li>
            <li className={submitStyles.listLinks}>PAYMENT</li>
          </ul>
        
             </div>
    );
};

export default UploadHeader;