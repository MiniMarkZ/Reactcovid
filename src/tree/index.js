import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: 'test',
    key: '0-0',
    children: [
      {
        title: 'leaf 0-0', 
        key: '0-0-0',
        isLeaf: true,
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'train',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      },
    ],
  },
  {
    title : 'sample_submission',
    key : '0-2',
    isLeaf : true ,
  },
  {
    title : 'train_image_level',
    key : '0-3',
    isLeaf : true ,
  },
  {
    title : 'train_study_level',
    key : '0-4',
    isLeaf : true ,
  }
];

const Treed = () => {
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};

export default Treed ;