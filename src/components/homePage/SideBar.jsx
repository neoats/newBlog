import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { getFeaturedPosts } from '../../services/dbquery';

const SideBar = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        async function fetchFeaturedPosts() {
            try {
                const fetchedPosts = await getFeaturedPosts();
                /* console.log(fetchedPosts); */
                setFeaturedPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchFeaturedPosts();
    }, []);

    const shortenTitle = (name, maxLength) => {
        if (typeof name === 'string' && name.length > maxLength) {
            return name.substring(0, maxLength) + '...';
        }
        return name;
    };
    

    return (
        <div className='w-60'>
            {/* latestblogs */}
            <div>
                <h3 className='text-2xl font-semibold text-center pr-8'>Son Konular</h3>
                <div>
                    {featuredPosts.slice(0, 5).map((post,i) => (
                        <div key={i} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <p >{shortenTitle(post.title, 30)}</p>
                            <Link to="/" className='text-base pb-2 hover:text-orange-500 items-center inline-flex py-1'>Read More <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* populerblogs */}
            <div className='mt-8'>
                <h3 className='text-2xl font-semibold text-center pr-8 mt-20'>Popüler Konular</h3>
                <div>
                    {featuredPosts.slice(6, 10).map((post,i) => (
                      
                        <div key={i} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <p >{shortenTitle(post.title, 30)}</p>
                            <Link to="/" className='text-base pb-2 hover:text-orange-500 items-center inline-flex py-1'>Read More <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
