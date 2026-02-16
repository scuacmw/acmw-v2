import React from 'react';
import './Resources.css';
import htmlCssImage from '../assets/html_github.png';
import reactNativeImage from '../assets/react_github.png';
// Edit workshop data below. Optional fields:
// slidesEmbed: Google Slides URL
// youtubeEmbed: YouTube URL (any format)
// imageUrl, imageLink: for image+link slot (HTML/CSS: slides + image; React: slides + youtube + image)
const toSlidesEmbedUrl = (url) => {
  if (!url || !url.trim()) return '';
  const u = url.trim();
  const match = u.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://docs.google.com/presentation/d/${match[1]}/embed`;
  return u;
};
const toYoutubeEmbedUrl = (url) => {
  if (!url || !url.trim()) return '';
  const u = url.trim().replace('youtubeeducation.com', 'youtube.com');
  const id = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/)|v=)([a-zA-Z0-9_-]+)/)?.[1] ||
    u.match(/[?&]v=([a-zA-Z0-9_-]+)/)?.[1];
  return id ? `https://www.youtube.com/embed/${id}` : u;
};

const workshops = [
  {
    title: 'iOS App Development Workshop',
    description: 'Learn more about iOS development with Swift! We go over creating a simple iOS application!',
    slidesEmbed: 'https://docs.google.com/presentation/d/1mCTikxkW31H-VGY0wVhBmNAzMNHDBLibrKXw0vKO_sk/present?slide=id.g10aeb03210f_0_348',
    youtubeEmbed: 'https://youtu.be/1Kx4QH7Q3oE',
  },
  {
    title: 'Flask Workshop',
    description: 'Learn more about how to create a website in python with Flask! This slide deck goes over all of the steps to install all the necessary software, create a flask website, and set up a flask API!',
    slidesEmbed: 'https://docs.google.com/presentation/d/1B7jPyTjut27MOAEQ4SJWsT8DToJbxiyHnprAAC-gbvk/present?slide=id.gaefed0262d_1_0',
  },
  {
    title: 'Pointers about Pointers',
    description: 'Learn more about pointers and their implementation.',
    slidesEmbed: 'https://docs.google.com/presentation/d/13DGOOv-7pcvdcCnkjKKp-v1sNCcNQ5053QIFKKVzLSM/present?slide=id.p',
    youtubeEmbed: 'https://www.youtube.com/watch?v=Bi0WnZTiyyI',
  },
  {
    title: 'Terminal Crash Course',
    description: 'This is a crash course on navigating on the terminal command line, editing files with vi/vim text editors, connecting to the SCU ECC lab computers on your own computer on the command line, and using  SSH and SFTP for transferring files to and from your local machine to your account in the lab. ',
    slidesEmbed: 'https://docs.google.com/presentation/d/1YkbQaPTlie-QHexTTwUGXFswOJlIunIFcjVAq0EmmTo/present?slide=id.p',
    youtubeEmbed: 'https://www.youtube.com/watch?v=65UzWOS4nKE',
  },
  {
    title: 'HTML & CSS Workshop',
    description: 'In this workshop, we review the basics of HTML and CSS! There are two demos and two projects in this workshop for you to practice alongside us and learn to make basic website using just HTML and CSS.',
    slidesEmbed: 'https://docs.google.com/presentation/d/1caGjrHXc1KWhAWYNMlm5wuO0tioKHBHco8M81LND9xo/present?slide=id.p',
    imageUrl: htmlCssImage,
    imageLink: 'https://github.com/scuacmw/HTML-CSS-Workshop',
  },
  {
    title: 'React Native Workshop',
    description: 'React Native is an open-source framework developed by Facebook; code is written in JavaScript and rendered with native code, so you can create apps that work on both Android and iOS!',
    slidesEmbed: 'https://docs.google.com/presentation/d/10M1IiRTBRRxeVC-YROHTeKklohzcDDN9L1nL4lPKp54/present?slide=id.g721ee06e32_0_0',
    youtubeEmbed: 'https://www.youtube.com/watch?v=q1YwpinHIQ0',
    imageUrl: reactNativeImage,
    imageLink: 'https://github.com/scuacmw/sampleApp',
  },
];

const Resources = () => {
  return (
    <div className="resources-page">
      <div className="resources-banner">
        <h1 className="resources-banner-title">Resources</h1>
      </div>

      <div className="resources-content">
        {workshops.map((workshop, index) => {
          const hasSlides = toSlidesEmbedUrl(workshop.slidesEmbed);
          const hasYoutube = toYoutubeEmbedUrl(workshop.youtubeEmbed);
          const hasImage = workshop.imageUrl;
          const hasImageSlot = 'imageUrl' in workshop || 'imageLink' in workshop;
          const slots = [hasSlides, hasYoutube, hasImageSlot].filter(Boolean).length;

          return (
            <section key={index} className="workshop-section">
              <h2 className="workshop-title">{workshop.title}</h2>
              <p className="workshop-description">{workshop.description}</p>
              <div className={`workshop-embeds workshop-embeds-${slots}`}>
                {hasSlides && (
                  <div className="embed-box embed-slides">
                    <iframe
                      src={toSlidesEmbedUrl(workshop.slidesEmbed)}
                      title={`${workshop.title} - Slides`}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                )}
                {hasYoutube && (
                  <div className="embed-box embed-youtube">
                    <iframe
                      src={toYoutubeEmbedUrl(workshop.youtubeEmbed)}
                      title={`${workshop.title} - Video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {hasImageSlot && (
                  <div className="embed-box embed-image-link">
                    {hasImage ? (
                      <img src={workshop.imageUrl} alt="" className="workshop-image" />
                    ) : (
                      <div className="embed-placeholder">
                        <p>Image</p>
                        <span>Add imageUrl above</span>
                      </div>
                    )}
                    {workshop.imageLink && workshop.imageLink.trim() ? (
                      <a
                        href={workshop.imageLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="workshop-image-link"
                      >
                        {workshop.imageLink}
                      </a>
                    ) : (
                      <div className="workshop-image-link-placeholder">
                        <span>Add imageLink above</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
