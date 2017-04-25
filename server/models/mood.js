/**
 * Created by 41389 on 2017/4/25.
 * 心情 
 * mood 1-100
 */
'use strict';

module.exports = function (sequelize,DataTypes) {
    let Mood = sequelize.define('mood',{
        mood_id:{
            type:DataTypes.INTEGER,
            unique:true,
            autoIncrement:true,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.UUID,
            allowNull:false
        },
        mood:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        }
    });
    return Mood;
}
