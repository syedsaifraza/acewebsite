import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services", 
    newTab: false,
    submenu: [
      {
        id: 151,
        title: "Cloud Solution",
        path: "/services/cloud-solution/",
        newTab: false,
      },
      {
        id:152,
        title: "Consulting Services",
        path: "/services/consulting-services/",
        newTab: false,
      },
      {
        id:153,
        title: "Infrastructure Solution",
        path: "/services/infrastructure/",
        newTab: false,
      },
      {
        id: 154,
        title: "Operational-support Services",
        path: "/services/operational-support/",
        newTab: false,
      },
      {
        id: 155,
        title: "Digital Experience Solution",
        path: "/services/digital-experience/",
        newTab: false,
      },
      {
        id: 156,
        title: "Hardware Solution",
        path: "/services/hardware-solution/",
        newTab: false,
      },
      
    ],
  },
  {
    id: 4,
    title: "Technologies",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Java",
        path: "/technologies/java",
        newTab: false,
      },
      {
        id: 42,
        title: "Python",
        path: "/technologies/python",
        newTab: false,
      },
      {
        id: 42,
        title: ".Net",
        path: "/technologies/dotNet",
        newTab: false,
      },
      {
        id: 42,
        title: "Php",
        path: "/technologies/php",
        newTab: false,
      },
      {
        id: 42,
        title: "Flutter-Dart",
        path: "/technologies/flutter",
        newTab: false,
      },
      {
        id: 42,
        title: "React",
        path: "/technologies/react",
        newTab: false,
      },
      {
        id: 42,
        title: "React Native",
        path: "/technologies/reactNative",
        newTab: false,
      },
      
      {
        id: 48,
        title: "Angular",
        path: "/technologies/angular",
        newTab: false,
      },
      {
        id: 49,
        title: "Vue.js",
        path: "/technologies/vuejs",
        newTab: false,
      },
      {
        id: 50,
        title: "Node.js",
        path: "/technologies/nodejs",
        newTab: false,
      },
      {
        id: 51,
        title: "Spring Boot",
        path: "/technologies/springboot",
        newTab: false,
      },
      {
        id: 52,
        title: "Kotlin",
        path: "/technologies/kotlin",
        newTab: false,
      },
      {
        id: 53,
        title: "Swift",
        path: "/technologies/swift",
        newTab: false,
      },
      {
        id: 54,
        title: "C#",
        path: "/technologies/csharp",
        newTab: false,
      },
      {
        id: 55,
        title: "Ruby on Rails",
        path: "/technologies/rubyonrails",
        newTab: false,
      },
    ],
  },
  
  {
    id: 6,
    title: "Industries",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Financial Services",
        path: "/industries/financial-services",
        newTab: false,
      },
       
      {
        id: 44,
        title: "Healthcare",
        path: "/industries/healthcare",
        newTab: false,
      },
      {
        id: 45,
        title: "Manufacturing",
        path: "/industries/manufacturing",
        newTab: false,
      },
      {
        id: 46,
        title: "Higher Educations",
        path: "/industries/education",
        newTab: false,
      },

      {
        id: 47,
        title: "Robotics",
        path: "/industries/robotics",
        newTab: false,
      },
      
      
    ],
  },
   
   
   
  // {
  //   id: 6,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
