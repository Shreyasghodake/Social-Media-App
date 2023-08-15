package com.example.social.media.Service.Impl;

import com.example.social.media.DTO.UserDTO;
import com.example.social.media.DTO.UserLoginDTO;
import com.example.social.media.Entity.User;
import com.example.social.media.Repo.UserRepo;
import com.example.social.media.Response.LoginResponse;
import com.example.social.media.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public LoginResponse loginEmplogin(UserLoginDTO userLogin) {
        String msg = "";
        User user = userRepo.findByEmail(userLogin.getEmail());
        if(user != null) {

            String password = userLogin.getPassword();
            if (password.equals(user.getPassword())) {
                return new LoginResponse("Login Success", Boolean.TRUE);
            } else {
                return new LoginResponse("Password Did not Match", Boolean.FALSE);
            }
        }
        else {
            return new LoginResponse("Login Failed",Boolean.FALSE);
        }
    }
}
