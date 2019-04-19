import React from "react";
import { Upload, Button, Icon, Progress } from "antd";
// import reqwest from "reqwest";
import { connect } from 'react-redux';
import { uploadFile } from '../../store/actions/studyMaterialActions';
// import ProgressBar from './ProgressBar';

class NewStudyMaterial extends React.Component {
	state = {
		fileList: []
	};

	handleUpload = () => {
		const { fileList } = this.state;

		// this.setState({
		// 	uploading: true
        // });

        // select last selected file to upload
        const fileToUpload = fileList[fileList.length-1];

        // upload file
        this.props.uploadFile({file: fileToUpload, addedAt: new Date()});
        this.setState({
            fileList: []
        });

		// You can use any AJAX library you like
		// reqwest({
		// 	url: "//jsonplaceholder.typicode.com/posts/",
		// 	method: "post",
		// 	processData: false,
		// 	data: formData,
		// 	success: () => {
		// 		this.setState({
		// 			fileList: [],
		// 			uploading: false
		// 		});
		// 		, message.success("upload successfully.");
		// 	},
		// 	error: () => {
		// 		this.setState({
		// 			uploading: false
		// 		});
		// 		, message.error("upload failed.");
		// 	}
		// });
	};

	render() {
        const { fileList } = this.state;
        const { uploading, percent } = this.props;
		const uploadProps = {
			onRemove: file => {
				this.setState(state => {
					const index = state.fileList.indexOf(file);
					const newFileList = state.fileList.slice();
					newFileList.splice(index, 1);
					return {
						fileList: newFileList
					};
				});
			},
			beforeUpload: file => {
				this.setState(state => ({
					fileList: [...state.fileList, file]
				}));
				return false;
			},
			fileList: fileList.slice(fileList.length-1,fileList.length)
		};

		return (
			<div style={{
                backgroundColor: '#ffffff',
                padding: 16,
                margin: 16,
                border: '1px solid #e8e8e8'
            }}>
				<Upload {...uploadProps}>
					<Button>
						<Icon type="upload" /> Select File
					</Button>
				</Upload>
                { uploading ? <Progress percent={percent} /> : null }
				<Button
					type="primary"
					onClick={this.handleUpload}
					disabled={fileList.length === 0}
					loading={uploading}
					style={{ marginTop: 16 }}>
					{uploading ? "Uploading" : "Start Upload"}
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        uploading: state.studyMaterial.uploading,
        percent: state.studyMaterial.progress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFile: (fileInfo) => dispatch(uploadFile(fileInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudyMaterial);