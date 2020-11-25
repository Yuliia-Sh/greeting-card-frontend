import React, { Component } from "react";
import BlockCommandRow from "../../components/BlockCommandRow";
import "./style.css";
import addImg from "../../assets/images/add.png";
import pictureImg from "../../assets/images/picture.png";
import audioImg from "../../assets/images/audio.png";
import youtubeLinkImg from "../../assets/images/youtube-link.png";
import { blockService } from "../../services/blockService";
import { Editor } from "@tinymce/tinymce-react";
import DeleteLinks from "../../forms/block/DeleteLinks";

export class CreateEditBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      plain_link: "",
      youtube: "",
      card_id: this.props.location.pathname.replace("/add_block/", ""),
      links:[],
      imageFileLinksToAdd: [],
      imageFilesToAdd:[],
      audioFileLinksToAdd: [],
      audioFilesToAdd:[]
    };
  }

  hanleChange = event => {
    let nameInput = event.target.name;
    let valueInput = event.target.value;
    this.setState({ [nameInput]: valueInput });
  };

  handleEditorChange = event => {
    console.log("Content was updated:", event.target.getContent());
    this.setState({ message: event.target.getContent() });
  };

  saveBlock = () => {
    blockService
      .createBlock(this.state)
      .then(() => this.props.history.push("/edit_card/" + this.state.card_id));
  };

  handleFileChange(files, nameFileProperty, nameLinkProperty) {
    if (!files || files.length === 0) {
      this.setState({[nameFileProperty]:[], [nameLinkProperty]:[]});
      return;
    } 
    
    let fileLinks = [];
    for (let i = 0; i< files.length; i++) {
      let fileLink = URL.createObjectURL(files[i]);
      fileLinks.push(fileLink);
    }
    this.setState({[nameFileProperty]:files, [nameLinkProperty]:fileLinks});
  }

  handleFileImagesChange = event => {
    this.handleFileChange(event.target.files, "imageFilesToAdd", "imageFileLinksToAdd");
    /*if (!event.target.files || event.target.files.length === 0) {
      this.setState({imageFilesToAdd:[], imageFileLinksToAdd:[]});
      return;
    } 
    
    let fileLinks = [];
    for (let i = 0; i< event.target.files.length; i++) {
      let fileLink = URL.createObjectURL(event.target.files[i]);
      fileLinks.push(fileLink);
    }
    this.setState({imageFilesToAdd:event.target.files, imageFileLinksToAdd:fileLinks});
  */}

  handleFileAudioChange = event => {
     this.handleFileChange(event.target.files, "audioFilesToAdd", "audioFileLinksToAdd");
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-functions">
          <BlockCommandRow id="1" save={this.saveBlock} />
          <main className="container_block no-bottom-padding">
            <div className="text-editor">
              <Editor
                apiKey="ouptnlkv10gj407mb2lyn62l4hlgmdhgwk8b8i05vek2l1qg"
                initialValue={this.state.message}
                init={{
                  height: 283,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | fontselect fontsizeselect | bold italic underline | forecolor backcolor | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | link",
                }}
                onChange={this.handleEditorChange}
              />
            </div>
           
            <form id="elements-adder__row" method="post">
              <label htmlFor="image-files" className="adder" name="images">
                <img src={pictureImg} alt="" className="element-type-icon" />
                <img src={addImg} alt="" className="element-adder-icon" />

                <input
                  type="file"
                  id="image-files"
                  name="image-files"
                  accept="image/*"
                  className="files-input"
                  onChange={this.handleFileImagesChange}
                  multiple
                />
              </label>

              <label htmlFor="audio-files" className="adder" name="audio">
                <img src={audioImg} alt="" className="element-type-icon" />
                <img src={addImg} alt="" className="element-adder-icon" />

                <input
                  type="file"
                  id="audio-files"
                  name="audio-files"
                  accept="audio/*"
                  className="files-input"
                  onChange={this.handleFileAudioChange}
                  multiple
                />
              </label>

              <label htmlFor="youtube-links" className="link-adder adder">
                <img
                  src={youtubeLinkImg}
                  className="element-type-icon"
                  alt=""
                />
                <textarea
                  id="youtube-links"
                  name="youtube"
                  className="links"
                  placeholder="Youtube links"
                  onChange={this.hanleChange}
                />
              </label>
            </form>
            <DeleteLinks
                 imagesToAdd = {this.state.imageFileLinksToAdd}
                 audioToAdd = {this.state.audioFileLinksToAdd}
                 links = {this.state.links}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default CreateEditBlock;
