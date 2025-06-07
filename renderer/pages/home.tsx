import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <button className="button home-page__button home-page__button_type_create_content">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 6.44266e-08 18.6569 0 17V3C0 1.34315 1.34315 6.44255e-08 3 0H17ZM9 5V9H5V11H9V15H11V11H15V9H11V5H9Z"
              fill="#0F2123"
            />
          </svg>
          <span>Создать проект</span>
        </button>

        <section className="home-page__buttons-container">
          <button className="button home-page__button home-page__button_type_record">
            <svg
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0">
                <rect
                  x="-2.4"
                  y="-2.4"
                  width="28.80"
                  height="28.80"
                  rx="14.4"
                  fill="#DB4852"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16 9L21 7V17L16 15M4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V17.5C16 18.0523 15.5523 18.5 15 18.5H4C3.44772 18.5 3 18.0523 3 17.5V6.5C3 5.94772 3.44772 5.5 4 5.5Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <span className="home-page__button-text-content">
              Запись экрана
            </span>
          </button>
          <button className="button home-page__button home-page__button_type_slice">
            <svg
              viewBox="-6 -6 36.00 36.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0">
                <rect
                  x="-6"
                  y="-6"
                  width="36.00"
                  height="36.00"
                  rx="18"
                  fill="#0099FF"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2.75 14.5C2.75 14.0858 2.41421 13.75 2 13.75C1.58579 13.75 1.25 14.0858 1.25 14.5H2.75ZM2.97631 2.87868L3.47803 3.43615L3.47803 3.43615L2.97631 2.87868ZM2.97631 19.1213L3.47803 18.5639L2.97631 19.1213ZM6.25 20C6.25 20.4142 6.58579 20.75 7 20.75C7.41421 20.75 7.75 20.4142 7.75 20H6.25ZM7.75 2C7.75 1.58579 7.41422 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2H7.75ZM7 7V7.75V7ZM2 6.25C1.58579 6.25 1.25 6.58579 1.25 7C1.25 7.41421 1.58579 7.75 2 7.75V6.25ZM12 20V20.75H12.75V20H12ZM2 15.25C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75V15.25ZM22.75 14.5C22.75 14.0858 22.4142 13.75 22 13.75C21.5858 13.75 21.25 14.0858 21.25 14.5H22.75ZM21.25 10.5C21.25 10.9142 21.5858 11.25 22 11.25C22.4142 11.25 22.75 10.9142 22.75 10.5H21.25ZM21.0237 4.87868L20.522 5.43615L21.0237 4.87868ZM21.0237 21.1213L20.522 20.5639L21.0237 21.1213ZM16.25 22C16.25 22.4142 16.5858 22.75 17 22.75C17.4142 22.75 17.75 22.4142 17.75 22H16.25ZM17.75 4C17.75 3.58579 17.4142 3.25 17 3.25C16.5858 3.25 16.25 3.58579 16.25 4H17.75ZM17 9V9.75V9ZM12 4V3.25H11.25V4L12 4ZM22 9.75C22.4142 9.75 22.75 9.41421 22.75 9C22.75 8.58579 22.4142 8.25 22 8.25V9.75ZM22 18.75C22.4142 18.75 22.75 18.4142 22.75 18C22.75 17.5858 22.4142 17.25 22 17.25V18.75ZM12 3L12.75 3V3L12 3ZM1.25 10.5C1.25 10.9142 1.58579 11.25 2 11.25C2.41421 11.25 2.75 10.9142 2.75 10.5H1.25ZM2.75 8C2.75 7.64443 2.75 7.31409 2.75192 7.00464L1.25195 6.99536C1.25 7.31032 1.25 7.6455 1.25 8H2.75ZM2.75192 7.00464C2.75868 5.91065 2.79037 5.14239 2.90886 4.56183C3.02163 4.00928 3.20202 3.68456 3.47803 3.43615L2.47459 2.32121C1.89684 2.84118 1.59677 3.48961 1.43915 4.26187C1.28726 5.00611 1.25863 5.91433 1.25195 6.99536L2.75192 7.00464ZM8.66667 1.25C8.05506 1.25 7.4967 1.24999 6.99024 1.25658L7.00977 2.75645C7.50454 2.75001 8.05246 2.75 8.66667 2.75V1.25ZM6.99024 1.25658C5.95477 1.27006 5.08619 1.31098 4.36486 1.45123C3.62845 1.59441 2.99885 1.84937 2.47459 2.32121L3.47803 3.43615C3.73967 3.20068 4.08877 3.033 4.65115 2.92366C5.22862 2.81138 5.97893 2.76988 7.00977 2.75645L6.99024 1.25658ZM8.66667 19.25C8.05246 19.25 7.50453 19.25 7.00976 19.2435L6.99024 20.7434C7.4967 20.75 8.05506 20.75 8.66667 20.75V19.25ZM7.00977 19.2435C5.97893 19.2301 5.22862 19.1886 4.65115 19.0763C4.08877 18.967 3.73967 18.7993 3.47803 18.5639L2.47459 19.6788C2.99885 20.1506 3.62845 20.4056 4.36486 20.5488C5.08619 20.689 5.95476 20.7299 6.99024 20.7434L7.00977 19.2435ZM1.25 14.5C1.25 15.2665 1.24999 15.4374 1.26967 16.0251L2.76883 15.9749C2.75001 15.4126 2.75 15.2617 2.75 14.5H1.25ZM1.26967 16.0251C1.32166 17.5781 1.50653 18.8075 2.47459 19.6788L3.47803 18.5639C3.02098 18.1525 2.82085 17.5288 2.76883 15.9749L1.26967 16.0251ZM6.25 16L6.25 19.9935H7.75L7.75 16H6.25ZM6.25 19.9935V20H7.75V19.9935H6.25ZM6.25 2V2.00652H7.75V2H6.25ZM6.25 2.00652V7H7.75V2.00652H6.25ZM11.25 3L11.25 7L12.75 7L12.75 3L11.25 3ZM12 6.25L7 6.25V7.75L12 7.75V6.25ZM7 6.25L2.00193 6.25L2.00193 7.75L7 7.75V6.25ZM2.00193 6.25H2V7.75H2.00193V6.25ZM11.25 7V16H12.75V7H11.25ZM11.25 16V20H12.75V16H11.25ZM12 15.25L7 15.25V16.75L12 16.75V15.25ZM7 15.25L2.01925 15.25L2.01925 16.75L7 16.75V15.25ZM2.01925 15.25H2V16.75H2.01925V15.25ZM12 19.25H8.66667V20.75H12V19.25ZM8.66667 2.75H11V1.25H8.66667V2.75ZM22.75 10.5C22.75 10.1465 22.75 9.31055 22.7481 8.99536L21.2481 9.00464C21.25 9.31387 21.25 10.1434 21.25 10.5H22.75ZM22.7481 8.99536C22.7414 7.91433 22.7127 7.00611 22.5608 6.26187C22.4032 5.48961 22.1032 4.84118 21.5254 4.32121L20.522 5.43615C20.798 5.68456 20.9784 6.00928 21.0911 6.56183C21.2096 7.14239 21.2413 7.91065 21.2481 9.00464L22.7481 8.99536ZM15.3333 4.75C15.9475 4.75 16.4955 4.75001 16.9902 4.75645L17.0098 3.25658C16.5033 3.24999 15.9449 3.25 15.3333 3.25V4.75ZM16.9902 4.75645C18.0211 4.76988 18.7714 4.81138 19.3489 4.92366C19.9112 5.033 20.2603 5.20068 20.522 5.43615L21.5254 4.32121C21.0011 3.84937 20.3716 3.59441 19.6351 3.45123C18.9138 3.31098 18.0452 3.27006 17.0098 3.25658L16.9902 4.75645ZM15.3333 22.75C15.9449 22.75 16.5033 22.75 17.0098 22.7434L16.9902 21.2435C16.4955 21.25 15.9475 21.25 15.3333 21.25V22.75ZM17.0098 22.7434C18.0452 22.7299 18.9138 22.689 19.6351 22.5488C20.3716 22.4056 21.0011 22.1506 21.5254 21.6788L20.522 20.5639C20.2603 20.7993 19.9112 20.967 19.3489 21.0763C18.7714 21.1886 18.0211 21.2301 16.9902 21.2435L17.0098 22.7434ZM21.25 14.5C21.25 15.2744 21.2499 17.4163 21.2312 17.9749L22.7303 18.0251C22.7501 17.4337 22.75 15.2538 22.75 14.5H21.25ZM21.2312 17.9749C21.1792 19.5288 20.979 20.1525 20.522 20.5639L21.5254 21.6788C22.4935 20.8075 22.6783 19.5781 22.7303 18.0251L21.2312 17.9749ZM16.25 18L16.25 21.9935H17.75L17.75 18H16.25ZM16.25 21.9935V22H17.75V21.9935H16.25ZM16.25 4V4.00652H17.75V4H16.25ZM16.25 4.00652V9H17.75V4.00652H16.25ZM11.25 4L11.25 9H12.75L12.75 4L11.25 4ZM12 9.75L17 9.75V8.25L12 8.25V9.75ZM17 9.75L21.9981 9.75V8.25L17 8.25V9.75ZM21.9981 9.75H22V8.25H21.9981V9.75ZM11.25 9V18H12.75V9H11.25ZM11.25 18V21H12.75V18H11.25ZM12 18.75H17V17.25H12V18.75ZM17 18.75H21.9808V17.25H17V18.75ZM21.9808 18.75H22V17.25H21.9808V18.75ZM13 22.75H15.3333V21.25H13V22.75ZM15.3333 3.25H12V4.75H15.3333V3.25ZM11.25 21C11.25 21.9665 12.0335 22.75 13 22.75V21.25C12.8619 21.25 12.75 21.1381 12.75 21H11.25ZM12.75 3C12.75 2.0335 11.9665 1.25 11 1.25V2.75C11.1381 2.75 11.25 2.86193 11.25 3L12.75 3ZM2.75 10.5V8H1.25V10.5H2.75Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
            <span className="home-page__button-text-content">
              Разделение длинных видео
            </span>
          </button>
        </section>
        <section className="projects">
          <header className="projects__header">
            <h2 className="projects__title">Проекты (20)</h2>
            <ul className="project__management-menu">
              <li className="project__management-item">
                <button className="button project__management-button">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </li>
              <li className="project__management-item">
                <button className="button project__management-button">
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="7" height="4" rx="1" fill="white" />
                    <rect
                      x="0.5"
                      y="6.5"
                      width="6"
                      height="3"
                      rx="0.5"
                      stroke="white"
                    />
                    <rect
                      x="9.5"
                      y="6.5"
                      width="6"
                      height="3"
                      rx="0.5"
                      stroke="white"
                    />
                    <rect
                      x="9.5"
                      y="0.5"
                      width="6"
                      height="3"
                      rx="0.5"
                      stroke="white"
                    />
                  </svg>
                </button>
              </li>
              <li className="project__management-item">
                <button className="button project__management-button">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.3094 2.25002H13.6908C13.9072 2.24988 14.0957 2.24976 14.2737 2.27819C14.977 2.39049 15.5856 2.82915 15.9146 3.46084C15.9978 3.62073 16.0573 3.79961 16.1256 4.00494L16.2373 4.33984C16.2562 4.39653 16.2616 4.41258 16.2661 4.42522C16.4413 4.90933 16.8953 5.23659 17.4099 5.24964C17.4235 5.24998 17.44 5.25004 17.5001 5.25004H20.5001C20.9143 5.25004 21.2501 5.58582 21.2501 6.00004C21.2501 6.41425 20.9143 6.75004 20.5001 6.75004H3.5C3.08579 6.75004 2.75 6.41425 2.75 6.00004C2.75 5.58582 3.08579 5.25004 3.5 5.25004H6.50008C6.56013 5.25004 6.5767 5.24998 6.59023 5.24964C7.10488 5.23659 7.55891 4.90936 7.73402 4.42524C7.73863 4.41251 7.74392 4.39681 7.76291 4.33984L7.87452 4.00496C7.94281 3.79964 8.00233 3.62073 8.08559 3.46084C8.41453 2.82915 9.02313 2.39049 9.72643 2.27819C9.90445 2.24976 10.093 2.24988 10.3094 2.25002ZM9.00815 5.25004C9.05966 5.14902 9.10531 5.04404 9.14458 4.93548C9.1565 4.90251 9.1682 4.86742 9.18322 4.82234L9.28302 4.52292C9.37419 4.24941 9.39519 4.19363 9.41601 4.15364C9.52566 3.94307 9.72853 3.79686 9.96296 3.75942C10.0075 3.75231 10.067 3.75004 10.3553 3.75004H13.6448C13.9331 3.75004 13.9927 3.75231 14.0372 3.75942C14.2716 3.79686 14.4745 3.94307 14.5842 4.15364C14.605 4.19363 14.626 4.2494 14.7171 4.52292L14.8169 4.82216L14.8556 4.9355C14.8949 5.04405 14.9405 5.14902 14.992 5.25004H9.00815Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        d="M5.91509 8.45015C5.88754 8.03685 5.53016 7.72415 5.11686 7.7517C4.70357 7.77925 4.39086 8.13663 4.41841 8.54993L4.88186 15.5017C4.96736 16.7844 5.03642 17.8205 5.19839 18.6336C5.36679 19.4789 5.65321 20.185 6.2448 20.7385C6.8364 21.2919 7.55995 21.5308 8.4146 21.6425C9.23662 21.7501 10.275 21.7501 11.5606 21.75H12.4395C13.7251 21.7501 14.7635 21.7501 15.5856 21.6425C16.4402 21.5308 17.1638 21.2919 17.7554 20.7385C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9638 17.8206 19.0328 16.7844 19.1183 15.5017L19.5818 8.54993C19.6093 8.13663 19.2966 7.77925 18.8833 7.7517C18.47 7.72415 18.1126 8.03685 18.0851 8.45015L17.6251 15.3493C17.5353 16.6971 17.4713 17.6349 17.3307 18.3406C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8989 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8989 7.26958 19.6431C6.99617 19.3873 6.80583 19.025 6.66948 18.3406C6.52892 17.6349 6.46489 16.6971 6.37503 15.3493L5.91509 8.45015Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        d="M9.42546 10.2538C9.83762 10.2125 10.2052 10.5133 10.2464 10.9254L10.7464 15.9254C10.7876 16.3376 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29503 16.4868 9.25381 16.0747L8.75381 11.0747C8.7126 10.6625 9.01331 10.295 9.42546 10.2538Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        d="M14.5747 10.2538C14.9869 10.295 15.2876 10.6625 15.2464 11.0747L14.7464 16.0747C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3376 13.2538 15.9254L13.7538 10.9254C13.795 10.5133 14.1626 10.2125 14.5747 10.2538Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
          </header>
          <ul className="projects__list">
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
            <li className="project projects__item">
              <div className="project__preview"></div>
              <div className="project__description">
                <h3 className="project__name">0604</h3>
                <div className="project__properties">
                  <span className="project__weight">135.3k</span> |{" "}
                  <span className="project__duration">00:06</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
