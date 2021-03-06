import React, { Component } from 'react'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class Upload extends Component {
    state = {
        avatar: "",
        isUploading: false,
        progress: 0,
    };
    
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        alert("The document was uploaded succesfully!")
        console.log("Success");

    };
    

    render() {
        return (
            <div>
                <form>
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    <label style={{ backgroundColor: '#598B2C', color: 'white', padding: 12, borderRadius: 4, cursor: 'pointer'  }}>
                        {this.props.label}
                        <FileUploader
                            accept="application/pdf"
                            hidden
                            filename={this.props.email}
                            storageRef={firebase.storage().ref(`/${this.props.filePath}`)}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                        />
                        <CloudUploadIcon className="margin" />
                    </label>

                </form>
            </div>
        );
    }
}

export default Upload;
