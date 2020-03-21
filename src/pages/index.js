import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

import Layout from '../components/LandingPage/Layout';
import ProjectCard from '../components/ProjectCard';
import { Title, BigTitle, SubTitle, Inner } from '../components/common';
import Hero from '../components/LandingPage/Hero';
import Projects from '../components/LandingPage/Projects';
import About from '../components/LandingPage/About';
import Contact from '../components/LandingPage/Contact';
import ViewBlogButton from '../components/LandingPage/ViewBlogButton';

import avatar from '../styles/images/avatar.jpg';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-32 xl:h-48 m-0`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-xl lg:text-2xl xl:text-3xl`};
`;

const AboutDesc = styled.div`
  ${tw`text-grey-light text-lg md:text-l lg:text-xl font-sans pt-10 md:pt-16 text-justify leading-loose`};
  opacity: 0.8;
`;

const DescLine = styled.p`
  ${tw`mt-4`};
  opacity: 0.8;
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

export default () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Vo Van Trung.
        </BigTitle>
        <SubTitle>Highly adaptable, result-driven problem solver seeking to build program that make people's lives easier</SubTitle>
        <ViewBlogButton />
      </Hero>
      <Projects offset={1}>
        <Title>Recent Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Nichigas Platform"
            link="https://www.nichigas.co.jp/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Application to support for call center of company. It works like a "mini google" of Nichigas.
          </ProjectCard>
          <ProjectCard
            title="Curations Platform"
            link="https://health-company.jp/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            App with more than 100.000 users at the moment. Aim to encourage everyone to exercise and live in a healthy ways.
            In some aspects, It can be considered as a game where people exercise to achieve mission and get gifts return.
          </ProjectCard>
          <ProjectCard
            title="JCC Platform"
            link="https://fundinno.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This platform act as a bridge that connect investor to start-up company, give them a help to control their business as well as financial forecast.
          </ProjectCard>
          <ProjectCard
            title="Capital Medica Platform"
            link="https://capimedi.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>More About Me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Trung Vo" />
          <AboutSub>
            To me, programming is a way to make my life becomes meaningful.
            I've made up my mind to spend my bloom of youth do coding stuff, to gain more and more experiences day by day.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          <DescLine>•  2 years of hands-on experience in Web development with Ruby On Rails.</DescLine>
          <DescLine>•  1.5 years of hands-on experience in Web Frontend especially SPA with React and other latest trending technologies.</DescLine>
          <DescLine>•  Have good knowledge of design patterns and building project using clean architecture (React).</DescLine>
          <DescLine>•  Fast learning a new language and technique in a couple of days.</DescLine>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:vo.van.trung.0196@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.facebook.com/vvtrung96">Facbook</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2020 by trungvv.{' '}
          <a href="https://github.com/vvtrung/my-blog">Github Repository</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
);
