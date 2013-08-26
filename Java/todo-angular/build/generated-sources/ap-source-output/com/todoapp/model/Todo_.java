package com.todoapp.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.0.v20130507-rNA", date="2013-08-26T23:37:23")
@StaticMetamodel(Todo.class)
public class Todo_ { 

    public static volatile SingularAttribute<Todo, Long> id;
    public static volatile SingularAttribute<Todo, String> title;
    public static volatile SingularAttribute<Todo, Boolean> done;

}