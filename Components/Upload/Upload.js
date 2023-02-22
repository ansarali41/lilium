import React from 'react';
import submitStyles from '../../styles/Submit.module.css'
import uploadStyles from '../../styles/Upload.module.css'
import UploadHeader from '../Common/UploadHeader';
import DragAndDrop from './DragAndDrop';

const Upload = () => {

    return (
        <div className='row px-5 '>
             <UploadHeader/>

             <div className={`${uploadStyles.uploadContainer} col-12 col-md-8`}>
                    <h1 className={submitStyles.title }>UPLOAD FILE</h1>
                    <hr className='my-5' />
                    <p className='fs-3 pb-5'>Upload the metadata file containing the standard specified <span className='text-primary'>here</span> </p>

                    <div className={uploadStyles.addFileBox}>
                        <p className='text-center text-warning '>Drag and drop any files <br /> here, or click below to <br /> browse.</p>
                        <div className="btn fs-2 bg-white text-dark"> <DragAndDrop/></div>
                    </div>
             </div>
                    <div className={`${uploadStyles.button} d-flex justify-content-center`}>
                    <div className={`${uploadStyles.button} py-2 px-5 btn btn-primary my-5`}>NEXT</div>
                </div>
        </div>
    );
};

export default Upload;