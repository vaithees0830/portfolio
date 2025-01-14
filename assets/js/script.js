import fetchData from './server/api.js';

class fetchDetails {
    constructor () {
        this.fData = new fetchData();
    }

    async fDetails () {
        const infor = await this.fData.fetchMethod();
        return infor.info;
    }
}

class Profile extends fetchDetails {

    async contactTemplate (proContact, src) {

        for (let i = 0; i < proContact.length; i++) {

            const contactLinkElement = document.createElement("a");
            contactLinkElement.href = proContact[i].link;

            const contactImgElement = document.createElement("img");
            contactImgElement.src = proContact[i].img;

            const contactTextElement = document.createElement("div");
            const textNode = document.createTextNode(proContact[i].label);

            contactTextElement.append(textNode);

            contactLinkElement.append(contactImgElement);
            contactLinkElement.appendChild(contactTextElement);
            src.appendChild(contactLinkElement);

        }

    }

    async socialTemplate (proSocial, src) {

        for (let i = 0; i < proSocial.length; i++) {

            const socialLinkElement = document.createElement("a");
            socialLinkElement.href = proSocial[i].link;
            socialLinkElement.title = proSocial[i].name;

            const imgElement = document.createElement('img');
            imgElement.src = proSocial[i].img;
            imgElement.alt = proSocial[i].alt;

            src.append(socialLinkElement);
            socialLinkElement.append(imgElement);

        }
    }
    
    async fDetails () {
        const profileElement = document.getElementById("profile");

        const profile = await super.fDetails();
        const profileData = profile[0];
        const profileName = profileData.name;
        const profileContact = profileData.contact;
        const profileSocial = profileData.social_media;

        profileElement.children[0].children[0].children[1].innerText = profileName;
        const srcContact = profileElement.children[0].children[1];
        const srcSocial = profileElement.children[0].children[2];

        this.contactTemplate(profileContact, srcContact);
        this.socialTemplate(profileSocial, srcSocial);
        
    }
}

class Skills extends fetchDetails {

    async skillsTemplate (sData, sSelect) {
        
        for (let i = 0; i < sData.length; i++) {
            const skillContainer = document.createElement("div");
            skillContainer.classList.add("card--container");

            const skillContainerShadow = document.createElement("div");
            skillContainerShadow.classList.add("card--container--shadow");

            const colorContainer = document.createElement("div");
            colorContainer.classList.add("color-container");

            const col1 = document.createElement("div");
            col1.classList.add("color1");

            const col2 = document.createElement("div");
            col2.classList.add("color2");

            const card = document.createElement("div");
            card.classList.add("card");

            const cardImg = document.createElement("div");
            cardImg.classList.add("card-img");

            const imgBox = document.createElement("img");
            imgBox.src = sData[i].img;
            imgBox.alt = sData[i].alt;

            const cardText = document.createElement("div");
            cardText.classList.add("card-text");

            const nodeText = document.createTextNode(sData[i].name);

            sSelect.append(skillContainer);
            skillContainer.append(skillContainerShadow);
            skillContainerShadow.append(colorContainer);
            colorContainer.append(col1); 
            colorContainer.append(col2); 
            skillContainerShadow.append(card);
            card.append(cardImg);
            cardImg.append(imgBox);
            card.append(cardText);
            cardText.append(nodeText);
        }

    }

    async skillsDetails () {
        const skillSelector = document.getElementById("skills");
        const skills = await super.fDetails();
        const skillsData = skills[1].skills;
        this.skillsTemplate(skillsData, skillSelector);
    }
}

class Certificates extends fetchDetails {

    async certTemplate (cData, cSelect) {
        for (let i = 0; i < cData.length; i++) {

            const certElement = document.createElement("div");
            certElement.classList.add("cert--container");

            const certElementShadow = document.createElement("div");
            certElementShadow.classList.add("cert--container--shadow");

            const card = document.createElement("div");
            card.className = "card";

            const cardName = document.createElement("h1");
            const name = document.createTextNode(cData[i].name);

            const cardPara = document.createElement("p");
            const para = document.createTextNode(cData[i].infor);

            const buttonCert = document.createElement("button");
            buttonCert.classList.add("btn", "btn--thirty");

            const aLink = document.createElement("a");
            aLink.href = cData[i].img;

            const btnLabel = document.createTextNode("Check out the link");


            cSelect.append(certElement);
            certElement.append(certElementShadow);
            certElementShadow.append(card);
            card.append(cardName);
            cardName.append(name);
            card.append(cardPara);
            cardPara.append(para);
            card.append(buttonCert);
            buttonCert.append(aLink);
            aLink.append(btnLabel);
            
        }
    }

    async certDetails () {
        const certSelector = document.getElementById("certificates");
        const certs = await super.fDetails();
        const certsData = certs[1].certificates;
        this.certTemplate(certsData, certSelector);
    }

}

class Projects extends fetchDetails {

    async projTemplate (pData, pSelect) {

        for (let i = 0; i < pData.length; i++) {

            const proContainer = document.createElement("div");
            proContainer.classList.add("projects--container");

            const proContainerShadow = document.createElement("div");
            proContainerShadow.classList.add("projects--container--shadow");

            const colorContainer = document.createElement("div");
            colorContainer.classList.add("color-container");

            const col1 = document.createElement("div");
            col1.classList.add("color1");

            const col2 = document.createElement("div");
            col2.classList.add("color2");

            const card = document.createElement("div");
            card.classList.add("card");

            const cardImg = document.createElement("div");
            cardImg.classList.add("card--img");

            const alink = document.createElement("a");
            alink.href = pData[i].link;
            alink.classList.add("link-btn");

            const linkImg = document.createElement("img");
            linkImg.src = "https://img.icons8.com/external-creatype-outline-colourcreatype/50/external-link-basic-creatype-outline-colourcreatype-4.png";
            linkImg.alt = "link-pointer";

            const linkText = document.createTextNode("Link");

            const imgProject = document.createElement("img");
            imgProject.src = pData[i].img;
            imgProject.alt = pData[i].alt;



            const cardDetails = document.createElement("div");
            cardDetails.classList.add("card--details");

            const hText = document.createElement("h1");

            const proName = document.createTextNode(pData[i].name);


            
            pSelect.append(proContainer);
            proContainer.append(proContainerShadow);
            proContainerShadow.append(colorContainer);
            colorContainer.append(col1);
            colorContainer.append(col2);
            proContainerShadow.append(card);
            card.append(cardImg);
            cardImg.append(alink);
            alink.append(linkImg);
            alink.append(linkText);
            cardImg.append(imgProject);
            card.append(cardDetails);
            cardDetails.append(hText);
            hText.append(proName);
        }

    }

    async proDetails () {
        const projSelector = document.getElementById("projects");
        const proj = await super.fDetails();
        const projData = proj[1].projects;
        console.log(projData);
        this.projTemplate(projData, projSelector);
    }
}


class Main {
    mainMethod ()  {

        // profile detail;
        let pro = new Profile();
        pro.fDetails();

        // skills
        let ski = new Skills();
        ski.skillsDetails();

        // certificates
        let cre = new Certificates();
        cre.certDetails();

        // projects
        let proj = new Projects();
        proj.proDetails();

    }
}


let main = new Main();
main.mainMethod();
