import React from 'react';
import Link from 'next/link';

type paramsProp={
    params:Promise<{articleid:string}>,
    searchParams:Promise<{lang?:"en" | "es" | "fr"}>
}
const NewsArticle = async ({params,searchParams}:paramsProp) => {
    const {articleid}=await params ;
    const {lang="en"}=await searchParams;
  return (
    <div>
      <h3>News Article {articleid}</h3>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleid}?lang=en`}>English</Link>
        <Link href={`/articles/${articleid}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleid}?lang=fr`}>French</Link>
      </div>
    </div>
  )
}

export default NewsArticle
