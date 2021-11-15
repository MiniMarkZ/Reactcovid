import React, { useEffect, useState } from "react";
import dicomParser  from "dicom-parser";
import cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import {useParams} from'react-router-dom';
import './dcm.css';

// เพื่อให้ dicomParser กับ cornerstone ใช้ได้
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
//cornerstoneWADOImageLoader.configure();


export default function DcmViewer() {
        const {...id} = useParams();

        useEffect(() => {
                 
        function loadAndViewImage(imageId) {
            var element = document.getElementById('dicomImage');
            //console.log(element);

            try {
                cornerstone.loadAndCacheImage(imageId).then(function(image) {
                    //console.log("โหลดรูป",cornerstone.getDefaultViewportForImage(element, image))
                    var viewport = cornerstone.getDefaultViewportForImage(element, image);
                    
                    cornerstone.displayImage(element, image, viewport);
                    //console.log(element,image,viewport)
                }, function(err) {
                    console.log(err);
                });
            }
            catch(err) {
                console.log(err);
            }
        }

        function downloadAndView() {
            console.log(id);
            let url = `http://localhost:5000/downloaddcm/${id[0]}`;
            // ใส่ wadouri เพื่อให้หาตัวโหลดรูปได้
            url = "wadouri:" + url;

            // ส่ง url ไป functionต่อไป
            loadAndViewImage(url);
        }

        cornerstone.events.addEventListener('cornerstoneimageloadprogress', function(event) {
            const eventData = event.detail;
            const loadProgress = document.getElementById('loadProgress');
            //console.log(loadProgress)
            loadProgress.textContent = `Image Load Progress: ${eventData.percentComplete}%`;
            //console.log(eventData.percentComplete)
        });
        var element = document.getElementById('dicomImage');

        //console.log(cornerstone.enable(element))
        cornerstone.enable(element);
        downloadAndView();
               
        });
          
    return  <div className="container-dcm" style={{alignContent : 'center',justifyContent : 'center',marginLeft:'40vh',marginRight:'auto'}}>
                <br/>
                
                    <div id="loadProgress" className="load">Image Load Progress:</div>
                    <br/>
                <div id="dicomImage" style={{height: '50vh',width: '50vh'}} ></div>
            </div>


  }