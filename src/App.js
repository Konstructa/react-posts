import './App.css';
import { Component } from 'react';
import { Posts } from './components/Posts';
import LoadPosts from './utils/LoadPosts'
import { Button } from './components/Comum/Button';

class App extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2
  };

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state

    const postsAndPhotos = await LoadPosts();

    this.setState({ 
      posts: postsAndPhotos.slice(page, postPerPage), 
      allPosts: postsAndPhotos,
      page: 0,
      postPerPage: 2
     })
  }

  loadMorePosts = () => {
    const { page, postPerPage, allPosts, posts } = this.state

    const nextPage = page + postPerPage

    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)

    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage})
  }

  render () { 

    const { page, postPerPage, allPosts, posts } = this.state

    const noMorePosts = page + postPerPage >= allPosts.length;
    
    return (
      <section className="container">
        <Posts posts={posts}/>

        <div className="button-container">
          <Button 
            text="Load more posts" 
            onClick={this.loadMorePosts} 
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
 }
}

export default App;
