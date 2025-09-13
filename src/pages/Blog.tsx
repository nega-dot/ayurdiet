import React from 'react';
import { Card } from '../components/Card';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Ayurvedic Constitution: A Complete Guide to Prakriti",
      excerpt: "Discover how to identify your unique Ayurvedic constitution and use this knowledge to optimize your health and nutrition.",
      author: "Dr. Shruti Agarwal",
      date: "March 15, 2024",
      category: "Ayurveda Basics",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Seasonal Eating: How to Adjust Your Diet According to Ayurvedic Principles",
      excerpt: "Learn how seasonal changes affect your doshas and discover the best foods to eat during each season for optimal health.",
      author: "Priya Mehta",
      date: "March 12, 2024",
      category: "Seasonal Nutrition",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Science Behind Ayurvedic Food Combinations",
      excerpt: "Explore the scientific basis of traditional Ayurvedic food combining principles and their impact on digestion and health.",
      author: "Dr. Rajesh Kumar",
      date: "March 10, 2024",
      category: "Nutrition Science",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Digestive Fire (Agni): The Key to Optimal Health",
      excerpt: "Understanding the concept of Agni in Ayurveda and practical tips to strengthen your digestive fire for better health.",
      author: "Dr. Shruti Agarwal",
      date: "March 8, 2024",
      category: "Digestive Health",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Ayurvedic Superfoods: Ancient Wisdom Meets Modern Nutrition",
      excerpt: "Discover traditional Ayurvedic superfoods that have been validated by modern nutritional science.",
      author: "Priya Mehta",
      date: "March 5, 2024",
      category: "Superfoods",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Managing Stress Through Ayurvedic Nutrition",
      excerpt: "Learn how specific foods and eating practices can help balance your nervous system and reduce stress naturally.",
      author: "Dr. Shruti Agarwal",
      date: "March 3, 2024",
      category: "Stress Management",
      image: "https://images.pexels.com/photos/3985164/pexels-photo-3985164.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read"
    }
  ];

  const categories = ["All", "Ayurveda Basics", "Seasonal Nutrition", "Nutrition Science", "Digestive Health", "Superfoods", "Stress Management"];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069]/10 to-[#98D8C8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#141711] mb-6">
            AyurDiet <span className="text-[#7FB069]">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4B5563] max-w-4xl mx-auto leading-relaxed">
            Discover the latest insights in Ayurvedic nutrition, wellness tips, and scientific research from our expert team
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-[#E0E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-[#7FB069] text-white"
                    : "bg-gray-100 text-[#4B5563] hover:bg-[#7FB069]/10 hover:text-[#7FB069]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#7FB069] font-semibold">Featured Article</span>
          </div>
          
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#7FB069]/10 text-[#7FB069] px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-[#4B5563] text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-[#141711] mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-[#4B5563] mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#7FB069] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#141711]">{blogPosts[0].author}</div>
                      <div className="text-[#4B5563] text-sm">{blogPosts[0].date}</div>
                    </div>
                  </div>
                  <button className="text-[#7FB069] font-semibold hover:text-[#6A9959] transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#141711] mb-4">Latest Articles</h2>
            <p className="text-[#4B5563]">Stay updated with the latest in Ayurvedic nutrition and wellness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-[#98D8C8]/20 text-[#98D8C8] px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-[#4B5563] text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#141711] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#4B5563] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#7FB069] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-[#141711] text-sm">{post.author}</div>
                        <div className="text-[#4B5563] text-xs">{post.date}</div>
                      </div>
                    </div>
                    <button className="text-[#7FB069] font-semibold text-sm hover:text-[#6A9959] transition-colors">
                      Read →
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-[#7FB069] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6A9959] transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069] to-[#98D8C8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and get the latest Ayurvedic nutrition insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-[#141711] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#7FB069] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};