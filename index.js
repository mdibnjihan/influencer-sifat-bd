/* Static data as dynamic */
const data = {
    "videos": [
        {
            "yt_link": "https://www.youtube.com/embed/pHj-zr24lJQ",
            "yt_title": "New tech video",
            "yt_description": "Lorem Ipsum dolor der quasta pes luro ve dista."
        },
        {
            "yt_link": "https://www.youtube.com/embed/pHj-zr24lJQ",
            "yt_title": "New tech video",
            "yt_description": "Lorem Ipsum dolor der quasta pes luro ve dista."
        },
        {
            "yt_link": "https://www.youtube.com/embed/pHj-zr24lJQ",
            "yt_title": "New tech video",
            "yt_description": "Lorem Ipsum dolor der quasta pes luro ve dista."
        }
    ],
    "experinece": [
        {
            "exp_img_link": "https://www.example.com/img.img",
            "exp_name": "Robi 10 Minute School",
            "exp_description": "Lorem Ipsum doloer des quasta lousies vista."
        } 
    ]
};

/* JS DOM by Defualt preview */
const videoContainer = document.createElement('div');
videoContainer.classList.add('video-container', 'ms-motion-slideRightIn');
videoContainer.id = 'vd_container';

data.videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('ms-Grid', 'ms-depth-4', 'video_card');

    const videoRow = document.createElement('div');
    videoRow.classList.add('ms-Grid-row');

    const videoCol1 = document.createElement('div');
    videoCol1.classList.add('ms-Grid-col', 'ms-sm12', 'ms-md5', 'ms-lg4');

    const videoIframe = document.createElement('iframe');
    videoIframe.classList.add('video_viewer');
    videoIframe.width = '100%';
    videoIframe.height = 'auto';
    videoIframe.src = video.yt_link;
    videoIframe.title = 'YouTube video player';
    videoIframe.frameBorder = 0;
    videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    videoIframe.allowFullscreen = true;

    videoCol1.appendChild(videoIframe);

    const videoCol2 = document.createElement('div');
    videoCol2.classList.add('ms-Grid-col', 'ms-sm12', 'ms-md71', 'ms-lg8', 'video_desc');

    const videoTitle = document.createElement('span');
    videoTitle.classList.add('ms-fontWeight-semibold', 'ms-fontSize-32');
    videoTitle.textContent = video.yt_title;

    const videoDesc = document.createElement('span');
    videoDesc.classList.add('ms-fontWeight-regular', 'ms-fontSize-8', 'gray-30');
    videoDesc.textContent = video.yt_description;

    videoCol2.appendChild(videoTitle);
    videoCol2.appendChild(document.createElement('br'));
    videoCol2.appendChild(videoDesc);

    videoRow.appendChild(videoCol1);
    videoRow.appendChild(videoCol2);

    videoCard.appendChild(videoRow);

    videoContainer.appendChild(videoCard);
});

const affiliateContainer = document.createElement('div');
affiliateContainer.classList.add('ms-motion-slideRightIn', 'affiliates', 'none');
affiliateContainer.id = "aff_container";

data.experinece.forEach(affiliate => {
    const affiliateCard = document.createElement('div');
    affiliateCard.classList.add("affiliates");

    const affiliateCompanyImg = document.createElement('img');
    affiliateCompanyImg.src = affiliate.exp_img_link;
    affiliateCompanyImg.classList.add('afl-icon');

    const affiliateTitle = document.createElement('span');
    affiliateTitle.classList.add('ms-fontWeight-bold', 'ms-fontSize-24');
    affiliateTitle.textContent = affiliate.exp_name;

    const add_break = document.createElement('br');

    const affiliateDescription = document.createElement('span');
    affiliateDescription.classList.add('ms-fontWeight-regular', 'ms-fontSize-8', 'gray-30');
    affiliateDescription.textContent = affiliate.exp_description;

    affiliateCard.appendChild(affiliateCompanyImg);
    affiliateCard.appendChild(affiliateTitle);
    affiliateCard.appendChild(add_break);
    affiliateCard.appendChild(affiliateDescription);

    affiliateContainer.appendChild(affiliateCard);
});

document.getElementById('dom-view-content').appendChild(videoContainer);
document.getElementById('dom-view-content').appendChild(affiliateContainer);

/* Event listeners */
document.getElementById("hire_me").addEventListener("click", function() {
    window.open("mailto:example@domain.com?subject=Customer%20Support");
});

document.getElementById("social_fb").addEventListener("click", function() {
    window.open("https://www.facebook.com/groups/135727362757614/", "_blank");
});

document.getElementById("social_yt").addEventListener("click", function() {
    window.open("https://www.youtube.com/@sifatstechreviews", "_blank");
});

document.getElementById("mode_vd").addEventListener("click", function() {
    document.getElementById("mode_afl").classList.remove("active-btn");
    document.getElementById("mode_vd").classList.add("active-btn");

    document.getElementById("vd_container").classList.remove("none");
    document.getElementById("aff_container").classList.add('none');
});

document.getElementById("mode_afl").addEventListener("click", function() {
    document.getElementById("mode_vd").classList.remove("active-btn");
    document.getElementById("mode_afl").classList.add("active-btn");

    document.getElementById('vd_container').classList.add('none');
    document.getElementById('aff_container').classList.remove('none');
});