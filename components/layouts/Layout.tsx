import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import React, { Component } from "react";
import Footer from "../nav/Footer";
import Header from "../nav/Header";
import SideBar from "../nav/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DefaultSeo
                title='Rapaxia'
                description='Creating fun'
            />
            <Header />
            <SideBar />
            <main className="ml-20 md:ml-60 md:px-20 pt-16">
                {children}
            </main>
        </>
    )
}