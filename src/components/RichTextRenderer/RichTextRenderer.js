import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import BulletList from "../BulletList/BulletList";

import "./styles.scss";

function RichTextRenderer(props) {
    const quoteIcon = require(`../../images/icons/quote_icon.svg`);
    const options = {
		renderNode: {
			[BLOCKS.UL_LIST]: (node) => {
				const list = node.content.map(elem => {
					return elem.content[0].content[0].value
				})
				return <BulletList listItems={list}/>
			},
			[BLOCKS.QUOTE]: (node) => {
				const { content } = node.content[0];
				return (
					<div className="block-quote">
						<img className="block-quote__start" src={quoteIcon} />
						<div className="block-quote__content">{content.map(paragrapgh => <p>{paragrapgh.value}</p>)}</div>
						<img className="block-quote__close" src={quoteIcon} />
					</div>
				)
			},
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				console.log(node);
				const imgSrc = node.data.target.fields.file['en-US'].url;
				//   const { title, description } = node.data.target.fields;
				return <img src={imgSrc} />;
			}
		}
    };
    
    return documentToReactComponents(props.description, options);
}

export default RichTextRenderer;