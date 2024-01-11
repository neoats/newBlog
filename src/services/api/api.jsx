// services.js

import {useEffect}  from 'react';
import { getPosts, getCategories } from '../../services/dbquery';

export const useBlogPageEffect = (currentPage, pageSize, selectedCategory, setPosts, setActiveCategory) => {
    useEffect(() => {
        async function fetchPosts() {
            try {
                const postsData = await getPosts();
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        async function fetchCategories() {
            try {
                const categories = await getCategories();
                setActiveCategory(categories);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
        fetchCategories();
    }, [currentPage, pageSize, selectedCategory]);
};

