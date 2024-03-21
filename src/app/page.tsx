'use client'
import React from "react"
import Image from "next/image"
import bgStyles from "../app/css/bgStyles.module.css";
import bar from "./config/bar.json"
import textStyles from "../app/css/textStyles.module.css"
import text from "./config/text.json";
import logo from "./config/logo.json";
import items from "./config/items.json";

const Thek300 = () => {
    return (
        <>
            {bar.map(item => (
                <div key={item.id} className={bgStyles.bg}>
                    <a href={`/detail/${item.id}`}>
                        <Image
                            src={item.thumbnail}
                            alt={item.description}
                            width={1728}
                            height={200}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </a>
                   
                </div>
            ))}
            {text.map(item => (
                <div key={item.id} className={textStyles.name}> 
                {item.name}
                {logo.map(item => (
                    <div key={item.id} className={textStyles.logo}>
                        <Image src={item.thumbnail} alt="thek300" width={300} height={300}/>
                    </div>
                ))}
                <div className={textStyles.container}>
                    <div className={textStyles.text}>{item.text1}</div>
                    <div className={textStyles.title}>{item.title}</div>
                    <div className={textStyles.text}>{item.text2}</div>
                    <div className={textStyles.image}><Image src={item.image} alt="thek300" width={400} height={400}/></div>
                    <div className={textStyles.text}><div id={textStyles.text3}>{item.text3}</div></div>
                </div>
                 </div>
                )
                )}
            <div>
                <div className={textStyles.ContainerItem}>
                {items.map(item =>(
                    <div key={item.id} className={textStyles.items}>
                        <a href={`detail/${item.id}`}>
                        <Image src={item.thumbnail} alt="thek300" width={300} height={450}/>
                        <a><br/>{item.text}<br/><a>________</a> </a>
                        </a>
                    </div>
                )
                    )}</div>
            </div>    

        </>
    );
}
export default Thek300;

