import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const QuestionRenderer = ({ content }) => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          img: ({node, ...props}) => <img style={{maxWidth: '100%'}} {...props} />, // Custom image rendering
          div: ({node, ...props}) => <div {...props} />, // Allow divs
          span: ({node, ...props}) => <span {...props} />, // Allow spans
        }}
      />
    </div>
  );
};

export default QuestionRenderer; 
