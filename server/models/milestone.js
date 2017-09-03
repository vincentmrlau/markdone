/**
 * Created by 41389 on 2017/4/25.
 * 里程碑
 */
'use strict';

module.exports = function (sequelize,DataTypes) {
    let Milestone = sequelize.define('milestone',{
        milestone_id:{
            type:DataTypes.INTEGER,
            unique:true,
            autoIncrement:true,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.UUID,
            allowNull:false
        },
        content:{
            // 内容
            type:DataTypes.TEXT,
            allowNull:false
        },
        date:{
            //时间
            type:DataTypes.DATEONLY,
            allowNull:false
        }
    });

    return Milestone;
}