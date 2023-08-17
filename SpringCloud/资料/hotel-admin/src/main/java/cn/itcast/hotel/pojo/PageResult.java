package cn.itcast.hotel.pojo;

import lombok.Data;

import java.util.List;

@Data
public class PageResult {
    private Long total;
    private List<Hotel> hotels;

    public PageResult() {
    }

    public PageResult(Long total, List<Hotel> hotels) {
        this.total = total;
        this.hotels = hotels;
    }
}
