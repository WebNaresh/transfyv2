import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseContext from "./UseContext";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
export const UseState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const [chatInput, setChatInput] = useState("");

  const [friends, setFriends] = useState([]);

  const [window1, setWindow1] = useState(window);

  const [socket, setSocket] = useState();

  const [pdf, setPdf] = useState(false);

  const [appAlert, setAppAlert] = useState({
    alert: false,
    type: "success",
    msg: "this is success alert",
  });

  const [appLoading, setAppLoading] = useState({
    load: false,
    color: "#fff",
  });

  const [collegeMaterialForm, setCollegeMaterialForm] = useState({
    Department: null,
    Name: null,
    Year: null,
    Semester: null,
  });

  const [aboutInfo, setAboutInfo] = useState([
    {
      name: "Dr. S R Bamane",
      message:
        "Khandala Vibhag Shikshan Samiti is a parent organisation of Sushila Shankarrao Mahavidyalaya, khandala Dist. Satara, established in 2007. Primary motto of the college is to provide the education for rural and remote area students. The Chairman of Khandala Vibhag Shikshan Samiti, Hon’ble Prataprrao Bhosale, former senior cabinet minister of Maharashtra Government, and our guide has always cherished new concepts in education. The Architect of Sushila Shankarrao Mahavidyalaya, Hon. Shankarrao Gadhave sir has played pioneering and proactive roles in establishing this college for process of social and economic transformation through dynamic education Our college provides education in Arts, Science, Commerce and B C A, degree courses. The management of the college has made available distance education by YCMOU Nasik. We have motivated our students for several activities. We offer training to our students in English proficiency and personality development short term course. Realizing the value of women empowerment, our students have organized self-protecting training camp for girls. The college has excellent support services in the form of library, computer laboratory, gymnasium, spacious playground yoga centre, parking, cooperative stationery store. We have implemented multidimensional co-curricular and extra-curricular activities to achieve all around development of students. We feel proud of our alumni which has rendered valuable services in different fields. Our students have excellent track record in sports, NCC, NNS, Cultural activities at University, State and National level I am proud of my qualified teaching staff and efficient administrative staff Friends, I was enthusiastically welcomed by Member of Trustee Hon. Shankarrao Gadhave Sir as a Principal of this esteemed college. This was a highly existential moment; I will carry this badge of honour with me till the end. Khandala is a least developed Tahsil, where more than 10,000, SC/ST, OBC and Rural students are taking education at a minimum cost in the ways of the modern world. We have been trying to provide the best services and facilities to achieve the goal of excellent education in spite of being a not grantable institution under the dynamic leadership of Hon. Secretary Shri Sanjiv Shankar rao Gadhave. We are dedicated to promote and foster a culture of high quality education. We believe in the supreme value of education as a central tool in the fight against poverty, the achievement of growth and empowerment of women. Therefore, Sushila Shankarrao Mahavidyalaya was established in 2007, and opened the doors of H. E for rural students of Khandala Tahsil. We believe in 'The fundamental cure to poverty is not food, but education'. I would like to deeply thank all the people associated with management for giving me this opportunity. In conclusion, let me share with you the essence of the Bhagwat Geeta, and I quote, 'The past was pleasant, the present is undoubtedly sweet and the future will definitely be splendid.",
      url: "http://ssgmkhandala.org/images/college/principal.jpg",
      index: 1,
    },
    {
      name: "Dr. S R Bamane",
      message:
        "Khandala Vibhag Shikshan Samiti is a parent organisation of Sushila Shankarrao Mahavidyalaya, khandala Dist. Satara, established in 2007. Primary motto of the college is to provide the education for rural and remote area students. The Chairman of Khandala Vibhag Shikshan Samiti, Hon’ble Prataprrao Bhosale, former senior cabinet minister of Maharashtra Government, and our guide has always cherished new concepts in education. The Architect of Sushila Shankarrao Mahavidyalaya, Hon. Shankarrao Gadhave sir has played pioneering and proactive roles in establishing this college for process of social and economic transformation through dynamic education Our college provides education in Arts, Science, Commerce and B C A, degree courses. The management of the college has made available distance education by YCMOU Nasik. We have motivated our students for several activities. We offer training to our students in English proficiency and personality development short term course. Realizing the value of women empowerment, our students have organized self-protecting training camp for girls. The college has excellent support services in the form of library, computer laboratory, gymnasium, spacious playground yoga centre, parking, cooperative stationery store. We have implemented multidimensional co-curricular and extra-curricular activities to achieve all around development of students. We feel proud of our alumni which has rendered valuable services in different fields. Our students have excellent track record in sports, NCC, NNS, Cultural activities at University, State and National level I am proud of my qualified teaching staff and efficient administrative staff Friends, I was enthusiastically welcomed by Member of Trustee Hon. Shankarrao Gadhave Sir as a Principal of this esteemed college. This was a highly existential moment; I will carry this badge of honour with me till the end. Khandala is a least developed Tahsil, where more than 10,000, SC/ST, OBC and Rural students are taking education at a minimum cost in the ways of the modern world. We have been trying to provide the best services and facilities to achieve the goal of excellent education in spite of being a not grantable institution under the dynamic leadership of Hon. Secretary Shri Sanjiv Shankar rao Gadhave. We are dedicated to promote and foster a culture of high quality education. We believe in the supreme value of education as a central tool in the fight against poverty, the achievement of growth and empowerment of women. Therefore, Sushila Shankarrao Mahavidyalaya was established in 2007, and opened the doors of H. E for rural students of Khandala Tahsil. We believe in 'The fundamental cure to poverty is not food, but education'. I would like to deeply thank all the people associated with management for giving me this opportunity. In conclusion, let me share with you the essence of the Bhagwat Geeta, and I quote, 'The past was pleasant, the present is undoubtedly sweet and the future will definitely be splendid.",
      url: "http://ssgmkhandala.org/images/college/principal.jpg",
      index: 2,
    },
  ]);

  const [material, setMaterial] = useState({
    Department: [
      { title: "Bachelor Of Computer Application" },
      { title: "Bachelor Of Science" },
      { title: "Bachelor Of Art" },
      { title: "Bachelor Of Commerce" },
    ],
    Name: [
      { title: "Naresh Mangesh Bhosale" },
      { title: "Omkar Sandip Kokil" },
      { title: "Yash Lenin Chavan" },
    ],

    Sem: [
      { title: "1" },
      { title: "2" },
      { title: "3" },
      { title: "4" },
      { title: "5" },
      { title: "6" },
    ],
    Semfor1stYear: [{ title: "1" }, { title: "2" }],
    Semfor2ndYear: [{ title: "3" }, { title: "4" }],
    Semfor3rdYear: [{ title: "5" }, { title: "6" }],
    Year: [{ title: "1st Year" }, { title: "2nd Year" }, { title: "3rd Year" }],
  });

  const redirect = useNavigate();

  const [user, setUser] = useState({
    name: null,
    email: null,
    _id: null,
    status: null,
    avatar: null,
  });

  const [currentUser, setCurrentUser] = useState({
    name: null,
    email: null,
    _id: null,
    status: null,
    avatar: null,
  });
  const [messages, setMessages] = useState([
    // {
    //   userId: "63646ad41ec81a7b975986cf",
    //   userMessage: [
    //     "Hi Jenny, How r u today?",
    //     "Did you train yesterday",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
    //   ],
    // },
    // {
    //   userId: "63646abd1ec81a7b975986c7",
    //   userMessage: [
    //     "iam naresh",
    //     "Hi Jenny, How r u today?",
    //     "Did you train yesterday",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
    //   ],
    // },
  ]);
  const [lenghtOfArray, setLenghtOfArray] = useState(messages.length);

  return (
    <UseContext.Provider
      value={{
        window1,
        setWindow1,
        pdf,
        setPdf,
        aboutInfo,
        setAboutInfo,
        setLenghtOfArray,
        material,
        setMaterial,
        collegeMaterialForm,
        setCollegeMaterialForm,
        user,
        setUser,
        currentUser,
        setCurrentUser,
        messages,
        setMessages,
        chatInput,
        setChatInput,
        redirect,
        cookies,
        setCookie,
        removeCookie,
        friends,
        setFriends,
        appLoading,
        setAppLoading,
        appAlert,
        setAppAlert,
        socket,
        setSocket,
        lenghtOfArray,
      }}
    >
      {props.children}
    </UseContext.Provider>
  );
};
export default UseState;
