package com.link.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.link.entity.enumerate.SourceLink;
import com.link.entity.enumerate.TypeLink;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
@Table(name = "link")
public class Link {
    @Id
    String id;
    @Temporal(value = TemporalType.DATE)
    Date dateCreation;
    String link;
    @Enumerated(value = EnumType.STRING)
    TypeLink typeLink;
    @Enumerated(value = EnumType.STRING)
    SourceLink sourceLink;
    String idSource;

}