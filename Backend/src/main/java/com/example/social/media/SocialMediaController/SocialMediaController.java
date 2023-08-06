package com.example.social.media.SocialMediaController;


import com.example.social.media.DTO.UserDTO;
import com.example.social.media.Entity.User;
import com.example.social.media.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

//import java.lang.invoke.SwitchPoint;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/user")
public class SocialMediaController {

    @Autowired
    private UserService userService;


    @PostMapping(path="save")
    private String saveUser(@RequestBody UserDTO userDTO) {
        return userService.addUser(userDTO);
    }

    @GetMapping(path="show")
    public ResponseEntity<List<User>> showUser() {
        List<User> users = userService.showUser();
        return new ResponseEntity<>(users, HttpStatus.OK);

    }

}
