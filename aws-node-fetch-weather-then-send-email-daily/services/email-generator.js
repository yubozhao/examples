import React from 'react';
import ReactDOMServer from 'react-dom/server';

const body = (props) => {
  return (
    <div>
      Current Summary is {props.summary}.
      Current Temperature is {props.temperature}
    </div>
  );
};

const generateHtml = (props) => {
  const factory = React.createFactory(body);
  const ele = factory(props);
  const result = ReactDOMServer.renderToStaticMarkup(ele);

  return result;
};


export default function (info) {
  const html = generateHtml(info.data);
  return Object.assign(info, { html });
}
