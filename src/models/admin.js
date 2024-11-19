// const uuid = require("uuid");
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define(
//     "User",
//     {
//       userId: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         primaryKey: true,
//         defaultValue: uuid.v4(),
//         onDelete: "CASCADE",
//         validate: {
//           notEmpty: true,
//         },
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         onDelete: "CASCADE",
//         validate: {
//           notEmpty: true,
//           isEmail: true,
//         },
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         onDelete: "CASCADE",
//         validate: {
//           notEmpty: true,
//           isEmail: true,
//         },
//       },
//       Password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           notEmpty: true,
//         },
//       },

//       CreatedBy: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           notEmpty: true,
//         },
//       },
//       CreatedOn: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW,
//         validate: {
//           notEmpty: true,
//         },
//       },
//       UpdatedOn: {
//         type: DataTypes.DATE,
//         allowNull: true,
//         defaultValue: DataTypes.NOW,
//       },
//       UpdatedBy: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       IsActive: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue: true,
//       },
//     },
//     {
//       timestamps: false,
//     }
//   );
//   return User;
// };
