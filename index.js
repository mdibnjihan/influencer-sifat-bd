/* Static data as dynamic */
const data = {
    "videos": [
        {
            "yt_link": "https://www.youtube.com/embed/HOpl9X1UarI",
            "yt_title": "Play online games freely in your computer using a browser",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to play online games freely in your computer or mobile using a browser. I hope you will love it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/pD2MELpIqwE",
            "yt_title": "Install GCam in your phone easily",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to install GCam in your phone. I hope you will love it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/JMqSyJGujz4",
            "yt_title": "Remove any song's voice easily",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to remove any song's voice easily. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/nuuuteCmxCc",
            "yt_title": "Set live desktop wallpaper",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to set live wallpaper in your pc easily. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/kpLXjouz16Q",
            "yt_title": "Enjoy the Football World Cup online from home very easily from now on",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to watch FIFA worldcup 2022 in online easily in Bangladesh. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/-x7B3YvqJFs",
            "yt_title": "Make Thumbnail easily",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to make Thumbnail in social media for different contents. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/ac967P8QtaU",
            "yt_title": "Use your smartphone as Webcam",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to use a smart phone as a webcam. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/dYBy8JrHQLQ",
            "yt_title": "Create your own logo easily",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to make logo easily in your phone or computer. I hope it will be helpful for you."
        },
        {
            "yt_link": "https://www.youtube.com/embed/Qitj-pN_3qM",
            "yt_title": "Remove watermark from images easily",
            "yt_description": "Hello, guys. I hope you are well. In this video I will show you how to remove watermark from any videos & photos. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/Aaom67iFz2M",
            "yt_title": "Remove background from images",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to remove & customise your photo's background easily. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/zD5aPNE0evI",
            "yt_title": "Use this amazing YouTube feature",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to minimize YouTube video screen in your computer easily. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/jh3MefMsX-I",
            "yt_title": "Colse Facebook Tags",
            "yt_description": "Hello guys. I hope you are well. In this video I will show you how to relieve from unnecessary posts in Facebook. I hope it will bef helpful for you."
        },
        {
            "yt_link": "https://www.youtube.com/embed/b66q8o2LcVU",
            "yt_title": "Stop unwanted ADS, Websites from showing up",
            "yt_description": "Hello, guys. I hope you are well. In this video I will show you how to block different po*n websites & videos easily. I hope it will helpful for you."
        },
        {
            "yt_link": "https://www.youtube.com/embed/vKc8ZKOp_Go",
            "yt_title": "Create your own QR in just minutes",
            "yt_description": "Hello viewers. I hope you are well. In this video I will show you how to create a QR Code easily in mobile. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/ALMbr-zWhyk",
            "yt_title": "How to know about medicine easily?",
            "yt_description": "Hello, viewers. I hope you are well. In this video I will show you how to know about any medicine. I hope you will like it."
        },
        {
            "yt_link": "https://www.youtube.com/embed/xrT8_sek-jg",
            "yt_title": "Create fake chat",
            "yt_description": "Hello guys, in this video I will show you how to create a fake chat easily. Please don't try it for bad sites."
        },
        {
            "yt_link": "https://www.youtube.com/embed/SgNL506bTGQ",
            "yt_title": "Interesting features in Google Maps",
            "yt_description": "In this video I will show you some interesting things about Google Maps."
        }
    ],
    "experinece": [
        {
            "exp_img_link": "./res/10-ms-logo.jpg",
            "exp_name": "Robi 10 Minute School",
            "exp_description": "Robi 10 Minute School is an online educational platform in Bangladesh that provides quality education to students through their website, app, and social media platforms. They offer over 8,000 free videos and study materials to prepare for finals, SSC/HSC exams, University Admission Exams, and BCS or Bank Job Entrance exams."
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
/* Code update needed here */
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
    videoCol2.classList.add('ms-Grid-col', 'ms-sm12', 'ms-md7', 'ms-lg8', 'video_desc');

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
    window.open("mailto:ehsanhaquesifat7@gmail.com?subject=Customer%20Support");
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
