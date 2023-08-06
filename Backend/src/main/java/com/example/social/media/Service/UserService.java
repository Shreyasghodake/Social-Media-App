package com.example.social.media.Service;

import com.example.social.media.DTO.UserDTO;
import com.example.social.media.Entity.User;

import java.util.List;

public interface UserService {
    String addUser(UserDTO userDTO);

    List<User> showUser();
}
