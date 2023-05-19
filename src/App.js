import './App.css';
import { Component } from 'react';
import { Posts } from './components/Posts';
import LoadPosts from './utils/LoadPosts'
import { Button } from './components/Comum/Button';
import { TextInput } from './components/Comum/TextInput';

class App extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2,
    searchValue: ''
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

  handleChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({ searchValue: value})
  }

  render () { 

    const { page, postPerPage, allPosts, posts, searchValue } = this.state

    const noMorePosts = page + postPerPage >= allPosts.length;

    const filteredPosts = 
    !!searchValue 
    ? 
      posts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts
    
    return (
      <section className="container">

        <div className='search-container'>
          {!!searchValue && (
            <h1> Search aValue: {searchValue}</h1>
          )}

            <TextInput 
              handleChange={this.handleChange}
              searchValue={searchValue}
            />
        </div>

        {filteredPosts.length > 0 
        ? 
          <Posts posts={filteredPosts}/>
        : 
          <p>Não existe posts</p> 
        }
        
        <div className="button-container">

          {!searchValue && (
            <Button 
              text="Load more posts" 
              onClick={this.loadMorePosts} 
              disabled={noMorePosts}
            />
          )}

        </div>
      </section>
    );
 }
}

export default App;
