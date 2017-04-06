import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './Home.styl';
import BlogTiles from './parts/BlogTiles';
import TopHomePanel from './parts/TopHomePanel';
import BlogListControlPanel from './parts/BlogListControlPanel';
import { connect } from 'react-redux';
import mapStateToProps from '../../core/redux/mapStateToProps';
import mapDispatchToProps from '../../core/redux/mapDispatchToProps';

class Home extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    homeState: PropTypes.object
  };

  componentDidMount() {
    const { actions: { getBlogList } } = this.props;
    getBlogList();
  }

  onListOptionClick(event) {
    event.preventDefault();

    const { actions: { switchToListView } } = this.props;
    switchToListView();
  }

  onTilesOptionClick(event) {
    event.preventDefault();

    const { actions: { getBlogList } } = this.props;
    getBlogList();
  }

  render() {
    let { homeState: {
      blogList,
      blogListLoading,
      isTilesOptionSelected,
      isListOptionSelected
    } } = this.props;
    blogList = blogList || [];

    return (
      <div className={style.container}>
        <TopHomePanel />
        <BlogListControlPanel isTilesOptionSelected={isTilesOptionSelected}
                              isListOptionSelected={isListOptionSelected}
                              onTilesOptionClick={this.onTilesOptionClick.bind(this)}
                              onListOptionClick={this.onListOptionClick.bind(this)}
        />
        {isTilesOptionSelected ?
          <BlogTiles blogList={blogList} blogListLoading={blogListLoading}/> :
          null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Home));
