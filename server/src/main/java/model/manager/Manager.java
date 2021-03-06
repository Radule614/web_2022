package model.manager;

import dto.user.ManagerDTO;
import dto.user.UserDTO;
import model.facility.Facility;
import model.User;
import model.UserType;

public class Manager extends User {
    public Facility facility;

    public Manager() {
        super(UserType.MANAGER);
    }

    @Override
    public UserDTO getDTO() {
        return new ManagerDTO(this);
    }
}
