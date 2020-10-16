import React, { Component } from 'react';
import styles from './User.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FingerPrint from '../../assets/image/fingerprint.jpg';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
  }
  
  render() {
    const { name, company, location, avatar_url, bio, blog, followers, following, public_repos, public_gists, hireable } = this.props.user;

    return (
      <div className={styles.wrapper}>
        <div className={styles.userImg}>
          <div className={styles.faceImgWrapper}>
            <img src={avatar_url} alt={name}/>
          </div>
          <div className={styles.fingerImgWrapper}>
            <img src={FingerPrint} alt="finger print"></img>
            <img src={FingerPrint} alt="finger print"></img>
          </div>
        </div>
        <div className={styles.userInfo}>
          <h2 className={styles.heading}>Person information</h2>
          <p><strong>Name: </strong>{name}</p>
          <p><strong>Company: </strong>{company}</p>
          <p><strong>Location: </strong>{location}</p>
          <p><strong>Bio: </strong>{bio}</p>
          <p><strong>Website: </strong>{blog}</p>
          <p><strong>Followers: </strong>{followers}</p>
          <p><strong>Following: </strong>{following}</p>
          <p><strong>Public repos: </strong>{public_repos}</p>
          <p><strong>Public gists: </strong>{public_gists}</p>
          <p><strong>Hireable: </strong>{hireable ? 'Yes' : 'No'}</p>
        </div>
        {this.props.repos && (
        <div className={styles.userRepo}>
          <h2 className={styles.heading}>Repositorium</h2>
          { this.props.repos.map(repo => (
            <p key={repo.id}><a href={repo.html_url}>{repo.name}</a></p>
          ))}
        </div>)}
        <Link className={styles.goBack} to="/hacker-finder">Go back</Link>
      </div>
    )
  }
}

export default User;