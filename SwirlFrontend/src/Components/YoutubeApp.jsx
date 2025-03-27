import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const YoutubeApp = () => {
  const { YoutubeVideo, YoutubeUrl } = useSelector((state) => state.Custom);

  const dispatch = useDispatch();

  const PlayYouTubeCard = () => {
    dispatch({
      type: "Opposite",
      payload: "YoutubeVideo",
    });
  };

  return (
    <div>
      {YoutubeVideo ? (
        <VideoContainerCard className="video-container">
          <IoCloseOutline
            className="absolute top-2 right-6 text-[50px] text-white font-extrabold cursor-pointer"
            onClick={PlayYouTubeCard}
          />
          <iframe
            width="92%"
            height="95%"
            src={`${YoutubeUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </VideoContainerCard>
      ) : null}
    </div>
  );
};

export default YoutubeApp;

const VideoContainerCard = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 1000;
  background-color: #0000005d;
  backdrop-filter: blur(20px);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
