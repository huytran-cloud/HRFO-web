import React from 'react'

import Header from '../../components/Header'
import AboutUsSection from '../../components/AboutUsSection'
import JobsSection from '../../components/JobsSection'
import PostList from '../../components/PostList'
import ContactForm from '../../components/ContactForm'

export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <AboutUsSection></AboutUsSection>
            <JobsSection></JobsSection>
            <PostList></PostList>
            <ContactForm></ContactForm>
        </div>
    )
}
