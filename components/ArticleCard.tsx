import React from 'react';

type ArticleCardProps = {
    imgSrc: string;
    title: string;
    author: string;
    date: string;
};


export default function ArticleCard({ imgSrc, title, author, date }: ArticleCardProps) {
    return (
        <div className="items-start flex max-w-max">
            <div className="items-center bg-MCwhite rounded-3xl flex flex-col p-2.5 hover:brightness-90 transition">
                <img className="mt-0.5 object-cover rounded-xl" src={imgSrc}></img>
                <p className="flex flex-col justify-center text-2xl p-0.5">{title}</p>
                <div className="items-start flex rounded-2xl">
                    <div className="flex flex-col justify-center pr-2.5 pt-0.5 text-xs">{author}</div>
                    <div className="flex flex-col justify-center pl-2.5 pt-0.5 text-xs">{date}</div>
                </div>
            </div>
        </div>
    )
}