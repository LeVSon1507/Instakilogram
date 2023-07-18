import { Avatar, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';

export const PhotoProfile = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const likeCount = 10; // Số lượt yêu thích
  const commentCount = 5; // Số lượt bình luận

  return (
    <Box sx={{
      marginTop: 3
    }}>
      <h1>Photos</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '20%',
            width: '20%',
            position: 'relative',
          }}
        >
          <Avatar
            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/278554943_1566862257017962_2433344869076876197_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=oaunsgSriG4AX9i98bk&_nc_ht=scontent.fdad3-5.fna&oh=00_AfARuOvn_qpcILVwAqsWlJfVgafBSWb_H6CQ5NYduTRqbQ&oe=64AC31E0"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '0',
              filter: isHovered ? 'brightness(70%)' : 'none',
              transition: 'filter 0.3s',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {isHovered && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                width: '100%',
                borderRadius: '4px',
              }}
            >
              <Box>
                <FavoriteIcon sx={{ color: '#fff', fontSize: 26, marginRight: 2 }} />
                <Typography variant="body2" sx={{ color: '#fff', marginRight: 10 }}>
                  {likeCount}
                </Typography>
              </Box>
              <Box>
                <ChatIcon sx={{ color: '#fff', fontSize: 26, marginRight: 2 }} />
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  {commentCount}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
