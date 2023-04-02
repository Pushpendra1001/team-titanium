import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import { TbReportAnalytics } from "react-icons/tb";

export default function BottomBar() {
  const router = useRouter();
  const bottomLink: {
    name: string;
    link: string;
    linktype: string;
    src: string;
  }[] = [
    {
      name: "Home",
      link: "/",
      linktype: "button",
      src: "/home.png",
    },
    { name: "Post", link: "/write-a-post", linktype: "button", src: "/problem-icon.png" },
    { name: "mic", link: "/report-search", linktype: "mic", src: "" },
    {
      name: "My Query",
      link: "/user-query",
      linktype: "button",
      src: "/gov-schems-icon.png",
    },
    {
      name: "Profile",
      link: "/profile",
      linktype: "button",
      src: "/profile icon.png",
    },
  ];
  const [activeBtnP, setActiveBtnP] = useState({width: 0, left: 0})
  const buttonClick = (e: any, link:string) => {
    e.preventDefault();
    console.log(e.target.getBoundingClientRect().left);
    console.log(e.target.getBoundingClientRect().width);
    setActiveBtnP({width: e.target.getBoundingClientRect().width, left: e.target.getBoundingClientRect().left})
    router.push(link);

  };
  const ReportPage = (e: any) => {
    e.preventDefault();
    router.push("/report-search");

  };
  useEffect(() => {
    const activeBtn = document.querySelectorAll(".bottom-link.active")[0];
    // console.log(activeBtn)
    setActiveBtnP({width: activeBtn?.getBoundingClientRect().width, left: activeBtn?.getBoundingClientRect().left})
  }, [])
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white z-50 px-4 pb-2 pt-0 border-t border-gray-100 md:border-0 md:pb-5 md:bg-transparent">
      <div className="w-full mb-1 md:hidden">
        <div className="relative duration-500 rounded-b-full h-1 bg-brand-ember-l-3" style={{left: activeBtnP.left-16+"px", width: activeBtnP.width+"px"}}></div>
      </div>
      <div className="flex items-center bg-white justify-between gap-2 relative md:max-w-[650px] md:left-1/2 md:-translate-x-1/2 md:border md:border-gray-300 md:rounded-lg md:px-4 md:py-2">
        {bottomLink.map((item, index) => {
          if (item.linktype === "mic") {
            return (
              <div key={index} className="relative cursor-pointer" onClick={ReportPage}>
                <div className={`${item.link === router.route ? "bg-brand-ember-l-3 text-white text-3xl" : "bg-brand-ember-l-1 text-brand-ember-l-3 text-3xl"} w-[48px] h-[48px] rounded-full duration-150 flex items-center justify-center`}>
                  <TbReportAnalytics className=""></TbReportAnalytics>
                </div>
              </div>
            );
          } else {
            // console.log(router.route);
            return (
              <div
                key={index}
              
                className={`bottom-link relative ${item.link === router.route ? "active": ""} flex flex-col cursor-pointer items-center justify-center md:flex-row md:gap-2`}
                onClick={(e) => buttonClick(e ,item.link)}
              >
                <div className="w-full flex justify-center"><img src={item.src} alt={item.name} className="w-[30px] select-none" style={{pointerEvents: "none"}} /></div>
                <p className="text-xs mt-[5px] md:mt-0 md:text-base whitespace-nowrap">{item.name}</p>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
}
