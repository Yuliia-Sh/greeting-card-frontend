import React, {Component} from 'react'
import BlockCommandRow from '../../components/BlockCommandRow';
import './style.css';
import linkImg from '../../assets/images/link.png';
import youtubeLinkImg from '../../assets/images/youtube-link.png';
import {blockService} from '../../services/blockService';

export class CreateEditBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            plain_link: '',
            youtube: '',
            card_id: this.props.location.pathname.replace("/add_block/", "")
        }
    }

    hanleChange = (event) => {
        let nameInput = event.target.name;
        let valueInput = event.target.value;
        this.setState({[nameInput]: valueInput});
    }

    saveBlock = () => {
        blockService.createBlock(this.state).then (()=> this.props.history.push('/edit_card/' + this.state.card_id));
    }

    render() {

        return (
            <div className="wrapper">
                <div className="main-functions">
                    <BlockCommandRow id="1" save={this.saveBlock}/>
                    <main className="container_block no-bottom-padding">
                        <textarea name="message" className="text-editor" onChange={this.hanleChange}></textarea>
                        <form id="elements-adder__row" method="post" encType="multipart/form-data">
                            <label htmlFor="links" className="link-adder adder">
                                <img src={linkImg} className="element-type-icon" alt=""/>
                                <textarea id="links" name="plain_link" className="links" placeholder="Links"
                                          onChange={this.hanleChange}/>
                            </label>
                            <label htmlFor="youtube-links" className="link-adder adder">
                                <img src={youtubeLinkImg} className="element-type-icon" alt=""/>
                                <textarea id="youtube-links" name="youtube" className="links"
                                          placeholder="Youtube links" onChange={this.hanleChange}/>
                            </label>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}

export default CreateEditBlock
