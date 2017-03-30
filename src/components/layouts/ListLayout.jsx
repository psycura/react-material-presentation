import React from 'react';
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";

const ListLayout = ( props ) => {
    const { listItems } = props.slide.components.wrapper.listItems;
    
    const styles = {
              list : {
                  width     : '25vw',
                  boxShadow : 'rgba(0, 0, 0, 0.156863) 0 3px 10px, rgba(0, 0, 0, 0.227451) 0 3px 10px',
                  padding   : ' 0 0',
              }
          };
    
    const renderItems = ( item, index ) => {
        return (
            <ListItem className="list-item"
                      key={index}
                      leftAvatar={
                          <Avatar backgroundColor={item.avatar}/>
                      }
                      primaryText={item.textBlock.title}
                      secondaryText={item.textBlock.content}
                      secondaryTextLines={2}>
            </ListItem>
        )
    };
    return (
        <div className="slideList">
            <List style={styles.list}
                  className="list">
                {
                    listItems.map ( renderItems )
                }
            </List>
        </div>
    );
};

export default ListLayout;