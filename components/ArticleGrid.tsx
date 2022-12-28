import React from 'react';
import ArticleCard from '../components/ArticleCard'
import PlaylistCard from './PlaylistCard';

export default function ArticleGrid() {
    return (
        <div className="flex justify-between align-center">
            <div className="grid grid-cols-3 p-4 gap-4 bg-black w-full place-items-center">
                <ArticleCard
                    imgSrc="https://via.placeholder.com/462x308"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/462x308"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <div className="row-span-2">
                    <PlaylistCard />
                </div>
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
                <ArticleCard
                    imgSrc="https://via.placeholder.com/432x228"
                    title="Best Vinyl Releases"
                    author="Nathan Moles"
                    date="December 10, 2022"
                />
            </div>
        </div>
    )
}