import chain from "../assets/chain-9365116-7621444.svg";
import fire from "../assets/1f4a5.svg";
import image1 from "../assets/Image 1.svg";
import creative from "../assets/Creative 1.svg";
import banner from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import bigIdea from "../assets/The big idea.svg";
import arrow from "../assets/arrow.svg";
import rulesImg from "../assets/7450159 1.svg";
import criteriaImg from "../assets/8046554 1.svg";
import trophy from "../assets/9486889 1.svg";
import rewardImg from "../assets/Rewards.svg";
import faqImage from "../assets/cwok_casual_21 1.svg";
// import libertyWhite from "../assets/Liberty company logo white colour.svg";
// import libertyPay from "../assets/Liberty company logo white.svg";
// import winWise from "../assets/Winwise logo White colour 1.svg";
// import whisperLogo from "../assets/wisper logo white.svg";
// import payboxLogo from "../assets/Paybox.svg";
// import vuzualPlus from "../assets/Vizual Plus.svg";

import allLogo from "../assets/Partner and sponsors section.svg";

import insta from "../assets/mdi_instagram.svg";
import twitter from "../assets/Vector.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";

import locationIcon from "../assets/location.svg";
import phone from "../assets/phone.svg";
const data = {
  navbar: {
    links: [
      {
        text: "timeline",
        url: "/",
      },
      {
        text: "overview",
        url: "/",
      },
      {
        text: "FAQs",
        url: "/",
      },
      {
        text: "contact",
        url: "/contact",
      },
    ],
  },
  hero: {
    titleTop: "getlinked Tech",
    titleDown: "Hackathon",
    chain: chain,
    fire: fire,
    text: "Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize",
    countdown: ["00", "00", "00"],
    creative: creative,
    image1: image1,
    banner: banner,
  },
  intro: {
    title: "Introduction to getlinked ",
    text: "Our tech hackathon is a melting pot of visionaries, and its purpose is asclear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!",
    image: bigIdea,
    arrow: arrow,
  },
  rules: {
    title: "Rules",
    title2: "Guidelines",
    text: "Our tech hackathon is a melting pot of visionaries, and its purpose is asclear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!",
    image: rulesImg,
  },
  criteria: {
    title: "Judging Criteria",
    title2: "Key Attributes",
    text: [
      {
        title: "Innovation and Creativity:",
        body: " Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
      },
      {
        title: "Functionality:",
        body: " Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
      },
      {
        title: "Impact and relevance:",
        body: " Determine the potential impact of the solution  in the real world.Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
      },
      {
        title: "Technical complexityy:",
        body: " Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
      },
      {
        title: "Adherence to Hackathon rules:",
        body: " Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements. ",
      },
    ],
    image: criteriaImg,
  },
  reward: {
    title: "Prizes and",
    subtitle: "Rewards",
    text: "Highlight of the prizes or rewards for winners and for participants.",
    trophy: trophy,
    image: rewardImg,
  },
  partners: {
    title: "Partners and Sponsors",
    text: "Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors",
    logos: [
      // libertyWhite,
      // libertyPay,
      // winWise,
      // whisperLogo,
      // payboxLogo,
      // vuzualPlus,
      allLogo,
    ],
  },
  footer: {
    text: "Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology",
    links: [
      {
        text: "Overview",
        url: "/",
      },
      {
        text: "Timeline",
        url: "/",
      },
      {
        text: "FAQs",
        url: "/",
      },
      {
        text: "Register",
        url: "/register",
      },
    ],
    contact: [
      {
        icon: phone,
        body: "+234 6707653444",
      },
      {
        icon: locationIcon,
        body: "27, Alara Street Yaba 100012 Lagos State ",
      },
    ],
    socialMedia: [insta, twitter, facebook, linkedin],
  },
  faq: {
    title: "Frequently Ask",
    subtitle: "Question",
    text: "We got answers to the questions that you might want to ask about",
    image: faqImage,
  },

  faqs: [
    {
      id: 1,
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae rem ad quod ea maxime qui, ",
    },
    {
      id: 2,
      question: "What happens if I need help during the hackathon?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae rem ad quod ea maxime qui,",
    },
    {
      id: 3,
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae rem ad quod ea maxime qui,",
    },
    {
      id: 4,
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae rem ad quod ea maxime qui,",
    },
    {
      id: 5,
      question: "What happens after the hackathon ends ?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae rem ad quod ea maxime qui,",
    },
    {
      id: 6,
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae rem ad quod ea maxime qui,",
    },
  ],
};

export default data;
