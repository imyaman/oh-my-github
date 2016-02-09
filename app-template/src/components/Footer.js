import React, { PropTypes, Component, } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import FontIcon from 'material-ui/lib/font-icon'

import { MainColors, } from '../theme'

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 200,
    marginLeft: '0px',
  },

  footer: {
    backgroundColor: MainColors[0],
  },

  copyright: {
    backgroundColor: MainColors[2],
  },

  copyrightRightLinkText: {
    fontWeight: 400,
    fontStyle: 'italic',
    color: MainColors[3],
  },

  copyrightLeftTextUserId: {
    fontWeight: 500,
    fontStyle: 'italic',
    color: MainColors[3],
  },
}

// TODO: 3. converts tab content color to grey

class Footer extends Component {
  render() {

    const { user, meta, } = this.props

    return (
      <footer className='page-footer' style={styles.footer}>
        <div className='container'>
          <div className='row'>
            <div className='col s12 l6'>
              <h5 className='white-text' style={styles.title}>About This Profile</h5>
              <p className='grey-text text-lighten-4'>Created at {meta.schema_created_at} </p>
              <RaisedButton
                className='blue-grey darken-1'
                label='Github Link'
                secondary
                linkButton
                href='https://github.com/callemall/material-ui'
                icon={<FontIcon className='fa fa-github' />}
                />
            </div>
            <div className='col s12 l4 offset-l2'>
            </div>
          </div>
        </div>
        <div className='footer-copyright' style={styles.copyright}>
          <div className='container'>
            <span>Copyright © 2016</span>
            <span style={styles.copyrightLeftTextUserId}> {user.login}, </span>
            <span> All rights reserved.</span>
            <a href='https://github.com/oh-my-github/generator' className='grey-text text-lighten-3 right'>
              <span>generated by</span>
              <span style={styles.copyrightRightLinkText}> oh-my-github</span>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

Footer.propTypes = {
  user: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}
