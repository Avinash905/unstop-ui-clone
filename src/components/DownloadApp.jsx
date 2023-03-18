import React from "react";
import "../styles/downloadapp.css";

const DownloadApp = () => {
  return (
    <section className="download-app">
      <div className="download-app-container container">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3ac0bfbd4_download_app_new.png?d=2360x912"
          alt="download app"
        />
        <div className="download-app-links">
          <a
            href="https://apps.apple.com/in/app/dare2compete/id1601170365"
            className="app-store"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="	https://d8it4huxumps7.cloudfront.net/uploads/images/63db3b3e19aa2_app_store.png?d=368x114"
              alt="app store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.dare2compete.app"
            className="google-play"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="	https://d8it4huxumps7.cloudfront.net/uploads/images/63db3b4dace41_play_store.png?d=368x114"
              alt="google play"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
