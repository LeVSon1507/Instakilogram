import { Avatar, Button, TextField } from '@mui/material';
import React, { useState } from 'react'

export const SearchFriend = () => {
  const friends = [
    { id: 1, name: "Friend 1", avatarUrl: "https://example.com/avatar1.jpg" },
    { id: 2, name: "Friend 2", avatarUrl: "https://example.com/avatar2.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    { id: 3, name: "Friend 3", avatarUrl: "https://example.com/avatar3.jpg" },
    // Add more friends...
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredFriends = friends.filter((friend) =>
      friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredFriends);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchResults([]);
  };
  return (
    <div className="friend-list flex-col">
              <div className="search-container">
                <TextField
                  label="Search friends"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  variant="outlined"
                  className="search-input"
                />
                <Button variant="contained" onClick={handleSearch} className="search-button">
                  Search
                </Button>
                <Button variant="contained" onClick={handleClear} className="clear-button">
                  Clear
                </Button>
              </div>
              {searchResults.length > 0 ? (
                searchResults.map((friend) => (
                  <div key={friend.id} className="friend">
                    <Avatar alt={friend.name} src={friend.avatarUrl} className="friend-avatar" />
                    <h4 className="friend-name">{friend.name}</h4>
                  </div>
                ))
              ) : (
                <div className="friends-container">
                  {friends.map((friend) => (
                    <div key={friend.id} className="friend">
                      <Avatar alt={friend.name} src={friend.avatarUrl} className="friend-avatar" />
                      <h4 className="friend-name">{friend.name}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
  )
}
