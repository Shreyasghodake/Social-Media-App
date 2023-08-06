package com.example.social.media.Service.Impl;

import com.example.social.media.DTO.UserDTO;
import com.example.social.media.Entity.User;
import com.example.social.media.Repo.UserRepo;
import com.example.social.media.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userImpl implements UserService {


    @Autowired
    private UserRepo userRepo;

    @Override
    public String addUser(UserDTO userDTO) {
        User user   = new User(
          userDTO.getUserId(),
                userDTO.getName(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getPassword()
        );

        userRepo.save(user);
        return user.getName();
    }

    @Override
    public List<User> showUser() {
        return userRepo.findAll();
    }
}
